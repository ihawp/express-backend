<?php

session_start();

if (isset($_SESSION['username'])) {
    $u_username = $_SESSION['username'];
    $u_id = $_SESSION['id'];
    $u_bio = $_SESSION['bio'];
    $u_pfp = $_SESSION['pfp'];
}


// page layout functions (AFTER LOGIN/REGISTER)
function loadHeader() {
    echo '
<div id="notification-popup" class="">
    
</div>
<div id="comment-popup" class="blur-background position-absolute width-100 height-100 center-vert center-hor">
       <a id="comment-popup-x" onclick="stopDisplayCommentBox()"><i class="fa-solid fa-x"></i></a>
       <form class="flex-column" action="addComment.php" method="POST">
           <div id="comment-form">
                <textarea class="no-resize" id="comment-box" name="comment-box" placeholder="say something!" maxlength="255"></textarea>
                <div id="add-comment-button-div" class="flex-column center-hor">
                    <button type="submit"><i class="fa-solid fa-share"></i></button>
                </div>
           </div>
       </form>
</div>
<div class="height-10">

</div>
<header class="flex-row center-hor center-vert text-align-center height-10 width-100">
    <div id="logo" class="width-50">
        <h1>statement of the day</h1>
    </div>
    <nav class="flex-row center-hor center-vert width-50">
        <a class="button" href="leaderboard.php"><i class="fa-solid fa-trophy"></i></a>
        <a class="button" href="home.php"><i class="fa-solid fa-house"></i></a>
        <a class="button" href="profile.php"><i class="fa-solid fa-user"></i></a>
        <a class="button" href="settings.php"><i class="fa-solid fa-gear"></i></a>
    </nav>
</header>
    ';
}
function loadFooter() {
    echo '
<footer class="flex-column center-hor center-vert height-20 width-100">
    <p>&copy; 2023. All rights reserved.</p>
    <div class="flex-column center-hor">
        <a id="help-button" href="mailto:help@statementoftheday.com">help</a>
    </div>
</footer>
    ';
}

// red error box custom or based on $e variable which is ?error= in the URL
function callError($e) {
    if ($e === 'wrong_password') {
        $stmt = 'wrong password bro';
    } else if ($e === 'no_user') {
        $stmt = 'wrong username bro';
    } else if ($e === 'registration_failed') {
        $stmt = 'registration failed';
    } else if ($e === 'existing_user') {
        $stmt = 'someone already got that bro';
    } else {
        $stmt = $e;
    }
    echo '
        <div id="error-box" class="flex-row center-hor width-100">
            <h1><i class="fa-solid fa-circle-exclamation noti-icon"></i> ' . $stmt . '</h1>
        </div>
    ';
}

// check login
// check if a user is logged in when trying to access any page past login/register
function checkLogin() {
        if (isset($_SESSION['username']) && isset($_SESSION['id'])) {
            return true; // returns true, I don't want to constantly reroute to home.php
        } else {
            header('Location: login.php');
        }
    }

// check if a user is logged in when accessing login.php/register.php
function alreadyLogged() {
        if (isset($_SESSION['username']) && isset($_SESSION['id'])) {
            header('Location: home.php');
        } else {
            return false;
        }
    }

// generating posts for printing (calls generation functions for printing ui below)
function loadPostANDComments($postID, $USER_NAME, $isComment) {
    include 'db_conn.php';

    // Load the main post
    if ($isComment) {
        $postQuery = "SELECT * FROM comments WHERE post_id = '$postID'";
    } else {
        $postQuery = "SELECT * FROM posts WHERE post_id = '$postID'";
    }
    $postResult = $conn->query($postQuery);
    $id = loadID($USER_NAME, $conn);
    $PFP = getPFP($id, $conn);
    if ($postResult && $postResult->num_rows > 0) {
        $postRow = $postResult->fetch_assoc();
        if ($isComment) {
            generateComments($USER_NAME, $postRow['content'], $PFP, $postRow['user_id'], $postRow['comment_id']);
        } else {
            generateViewPost($USER_NAME, $postRow['user_id'], $postRow['content'], $postRow['likes'], $postRow['post_id'], $PFP);
        }
    }

    // Load the comments associated with the post
    $commentsQuery = "SELECT * FROM comments WHERE post_id = '$postID'";
    $commentsResult = $conn->query($commentsQuery);
    if ($commentsResult) {
        while ($commentRow = $commentsResult->fetch_assoc()) {
            $PFP = getPFP($commentRow['user_id'], $conn);
            $USER_NAME = loadUsername($commentRow['user_id'], $conn);
            generateComments($USER_NAME, $commentRow['content'], $PFP, $commentRow['user_id'], $commentRow['comment_id']);
        }
    }
}
function generatePost($username, $posterID, $message, $likes, $postID, $path) {
    echo '<div class="post" onclick="viewPost('.$postID.', \''.$username.'\')">';
    echo '<div class="flex-row center-hor">';
    echo '<img id="post-pfp" src="'.$path.'">';
    echo '<h1><a href="user.php?viewuser='.$username.'">@'. $username .'</a></h1>';
    echo '<div class="flex-row center-hor">';
    if ($_SESSION['id'] === $posterID) {
        echo '<h1><a class="post-menu-dots" data-post-id="' . $postID . '"><i class="fa-solid fa-ellipsis-vertical"></i></a></h1>';
        echo '<div id="post-menu-' . $postID . '" class="post-menu flex-row center-hor center-vert">';
        echo '<a onclick="deletePost(event, ' . $postID . ')" class="post-menu-buttons">delete</a>';
        echo '</div>';
    }
    echo '</div>';
    echo '</div>';
    echo '<style>';
    echo '#post-menu-'.$postID.' {';
    echo 'display: none;';
    echo '}';
    echo '</style>';
    echo '<p>'. $message .'</p>';
    echo '<div class="flex-row center-hor">';
    echo '<a onclick="addLike(event, '.$postID.','. $posterID.')" id="like-btn"><i class="fa-solid fa-heart"></i></a>';
    echo '<p id="post-likes-count-' . $postID . '">' . $likes . '</p>';
    echo '<a onclick="displayCommentBox(event, '.$postID.')" id="comment-btn"><i class="fa-solid fa-comment"></i></a>';
    echo '</div>';
    echo '</div>';
} // generates post for home page
function generateViewPost($username, $posterID, $message, $likes, $postID, $path) {
    echo '<div class="post no-pointer">';
    echo '<div class="flex-row center-hor">';
    echo '<img id="post-pfp" src="'.$path.'">';
    echo '<h1><a href="user.php?viewuser='.$username.'">@'. $username .'</a></h1>';
    echo '<div class="flex-row center-hor">';
    if ($_SESSION['id'] === $posterID) {
        echo '<h1><a class="post-menu-dots" data-post-id="' . $postID . '"><i class="fa-solid fa-ellipsis-vertical"></i></a></h1>';
        echo '<div id="post-menu-' . $postID . '" class="post-menu flex-row center-hor center-vert">';
        echo '<a onclick="deletePost(event, ' . $postID . ')" class="post-menu-buttons">delete</a>';
        echo '</div>';
    }
    echo '</div>';
    echo '<style>';
    echo '#post-menu-'.$postID.' {';
    echo 'display: none;';
    echo '}';
    echo '</style>';
    echo '</div>';
    echo '<p>'. $message .'</p>';
    echo '<div class="flex-row center-hor">';
    echo '<a onclick="addLike(event, '.$postID.','. $posterID.')" id="like-btn"><i class="fa-solid fa-heart"></i></a>';
    echo '<p id="post-likes-count-' . $postID . '">' . $likes . '</p>';
    echo '<a class="height-5 width-5" onclick="displayCommentBox(event, '.$postID.')" id="comment-btn"><i class="fa-solid fa-comment"></i></a>';
    echo '</div>';
    echo '</div>';
} // generates posts for being viewed when pressed on
function generateComments($username, $message, $path, $posterID, $commentID) {
    echo '<div class="post no-pointer">';
    echo '<div class="flex-row center-hor">';
    echo '<img id="post-pfp" src="'.$path.'">';
    echo '<h1><a href="user.php?viewuser='.$username.'">@'. $username .'</a></h1>';
    echo '<div class="flex-row center-hor">';
    if ($_SESSION['id'] === $posterID) {
        echo '<h1><a class="comment-menu-dots" data-comment-id="' . $commentID . '"><i class="fa-solid fa-ellipsis-vertical"></i></a></h1>';
        echo '<div id="post-menu-' . $commentID . '" class="post-menu flex-row center-hor center-vert">';
        echo '<a onclick="deleteComment(event, ' . $commentID . ')" class="post-menu-buttons">delete</a>';
        echo '</div>';
    }
    echo '</div>';
    echo '</div>';
    echo '<style>';
    echo '#post-menu-'.$commentID.' {';
    echo 'display: none;';
    echo '}';
    echo '</style>';
    echo '<p>'. $message .'</p>';
    echo '<div class="flex-row center-hor">';
    echo '</div>';
    echo '</div>';
} // generates the comments for a given post


// load home page
function loadPostsInfo() {
    include 'db_conn.php';

    $followerID = $_SESSION['id'];

    if (isset($_GET['show']) && $_GET['show'] === 'following') {
        $query = "SELECT followed_id FROM followers WHERE follower_id = '$followerID'"; // first query should get the people the user is following
        $result = $conn->query($query);
        if ($result && $result->num_rows > 0) {
            $followers_id_array = [];
            while ($row = $result->fetch_assoc()) {
                array_push($followers_id_array, $row['followed_id']);
            }
            $length_of_followers = count($followers_id_array);
            for ($i = 0; $i < $length_of_followers; $i++) {
                $query = "SELECT * FROM posts WHERE user_id = '$followers_id_array[$i]' ORDER BY timestamp DESC LIMIT 1"; // first query should get the people the user is following
                $result = $conn->query($query);
                if ($result && $result->num_rows > 0) {
                    while ($row = $result->fetch_assoc()) {
                        $id = $row['user_id'];
                        generatePost(loadUsername($id, $conn), $id, $row['content'], $row['likes'], $row['post_id'], getPFP($id, $conn));
                    }
                }
            }
        } else {
            echo "
            <div class='height-5'></div>
            <div class='flex-column center-hor'>
                <h1 class=''>You don't follow anyone.</h1>
                <h2 class=''>...but it doesn't have to be that way!</h2>
                <h1>Click <a href='home.php?show=result' id='help-button' style='color: var(--third-color)'>here</a>.</h1>
            </div>
            ";
        }
    } else {
        $query = "SELECT user_id, likes, post_id, content FROM posts
                  ORDER BY timestamp DESC
                  LIMIT 10";
        $result = $conn->query($query);
        if ($result && $result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $id = $row['user_id'];
                generatePost(loadUsername($id, $conn), $id, $row['content'], $row['likes'], $row['post_id'], getPFP($id, $conn));
            }
        } else {
            echo 'No posts found.';
        }
        $conn->close();
    }
}

// strictly query functions that return one value
function findFollowerCount($conn, $userID) {
    $query = "SELECT follower_id FROM followers WHERE followed_id = '$userID'";
    $result = $conn->query($query);
    if ($result) {
        $followerCount = 0;
        while ($result->fetch_assoc()) {
            $followerCount++;
        }
        return $followerCount;
    }
    return 0;
}
function findFollowingCount($conn, $userID) {
    $query = "SELECT followed_id FROM followers WHERE follower_id = '$userID'";
    $result = $conn->query($query);
    if ($result) {
        $followingCount = 0;
        while ($result->fetch_assoc()) {
            $followingCount++;
        }
        return $followingCount;
    }
    return 0;
}
function checkFollowing($viewingID, $conn, $followingID) {
    $checkQuery = "SELECT * FROM followers WHERE followed_id = '$viewingID' AND follower_id = '$followingID'";
    $checkResult = $conn->query($checkQuery);

    if ($checkResult && $checkResult->num_rows > 0) {
        return true;
    } else {
        return false;
    }
} // find out if $followingID is following $viewingID
function loadID($viewuser, $conn) {
    $query = "SELECT id FROM accounts WHERE username = '$viewuser'";
    $result = $conn->query($query);
    if ($result && $result->num_rows > 0) {
        $row = $result->fetch_assoc();
        return $row['id'];
    } else {
        return false;
    }
}
function loadUsername($id, $conn) {
    $query = "SELECT username FROM accounts WHERE id = '$id'";
    $result = $conn->query($query);
    if ($result) {
        while ($row = $result->fetch_assoc()) {
            return $row['username'];
        }
    } else {
        echo 'no posts';
    }
}
function getPFP($id, $conn) {
    $query = "SELECT pfp FROM accounts WHERE id = '$id'";
    $result = $conn->query($query);
    if ($result) {
        while ($row = $result->fetch_assoc()) {
            return $row['pfp'];
        }
    }
}


// query that calls UI generation
function profileLoadPosts() {
    include_once 'db_conn.php';
    $id = $_SESSION['id'];
    $query = "SELECT * FROM posts
              WHERE user_id = '$id'
              ORDER BY timestamp DESC
              LIMIT 25";
    $result = $conn->query($query);
    loadAccountInfo($conn, $id, true);
    if ($result && $result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $id = $row['user_id'];
            $likes = $row['likes'];
            $postID = $row['post_id'];
            $s = loadUsername($id, $conn);
            $PFP = getPFP($id, $conn);
            generatePost($s, $id, $row['content'], $likes, $postID, $PFP);
        }
    } else {
        echo '<div class="flex-column center-hor center-vert width-10 height-15">';
        echo 'No posts found.';
        echo '</div>';
    }
    $conn->close();
} // viewing your own profile
function loadViewingPosts($viewuser) {
    include_once 'db_conn.php';
    $viewingID = loadID($viewuser, $conn);
    if ($viewingID !== false) {
        $query = "SELECT * FROM posts 
                  WHERE user_id = '$viewingID'
                  ORDER BY timestamp DESC
                  LIMIT 25";
        $result = $conn->query($query);
        if ($result) {
            loadAccountInfo($conn, $viewingID, false);
            $PFP = getPFP($viewingID, $conn);
            while ($row = $result->fetch_assoc()) {
                $message = $row['content'];
                $likes = $row['likes'];
                $postID = $row['post_id'];
                generatePost($viewuser, $viewingID, $message, $likes, $postID, $PFP);
            }
        } else {
            callError('No posts found.');
        }
    } else {
        echo 'User does not exist.';
    }
    $conn->close();
} // when you are viewing someone elses profile
function loadAccountInfo($conn, $id, $forProfile) {
    $following_id = $_SESSION['id'];
    $query = "SELECT username, bio FROM accounts WHERE id = '$id'";
    $result = $conn->query($query);
    if ($result) {
        while ($row = $result->fetch_assoc()) {
            echo '<div id="profile-info" class="flex-column">';
            echo '<h1>'.$row['username'].' #'.$id.'</h1>';
            echo '<p>'.$row['bio'].'</p>';

            $followers = findFollowerCount($conn, $id);
            $following = findFollowingCount($conn, $id);
            echo '<div class="flex-row center-hor">';
            echo '<p class="margin-right-10">Followers: <a id="follow-count">'.$followers.'</a></p>';
            echo '<p>Following: '.$following.'</p>';
            if ($forProfile) {

            } else {
                $following = checkFollowing($id, $conn, $following_id);
                if ($following) {
                    echo '<button id="follow-button" onclick="addFollower('.$id.')">unfollow</button>';
                } else {
                    echo '<button id="follow-button" onclick="addFollower('.$id.')">follow</button>';
                }
            }
            echo '</div>';
            echo '</div>';
        }
    }
} // loads data for viewing any profiles

// load the leaderboard (make a query and call generate leaderboard)
function loadLeaderboard() {
    include 'db_conn.php';
    date_default_timezone_set('America/Regina');
    $currentDateTime = date('Y-m-d H:i:s');
    $previousDayCutoff = date('Y-m-d', strtotime('-1 days')). ' 17:00:00';
    $currentDayCutoff = date('Y-m-d'). ' 17:00:00';

    if ($currentDateTime > $currentDayCutoff) {
        $query = "SELECT * FROM posts 
            WHERE timestamp >= '$previousDayCutoff' AND timestamp < '$currentDayCutoff' 
            ORDER BY likes DESC, timestamp DESC LIMIT 3";
    } else {
        $query = "SELECT * FROM posts 
            WHERE timestamp >= '$previousDayCutoff' AND timestamp < '$currentDayCutoff'
            ORDER BY likes DESC LIMIT 10";
    }

    $result = $conn->query($query);
    echo '<div class="width-100 height-10"></div>';
    echo '<div id="custom-mobile-spacer2" class="width-100"></div>';


    if ($result) {
        $count = 0;
        while ($row = $result->fetch_assoc()) {
            $count += 1;
            if (isset($row['content'])) {
                $u = $row['user_id'];
                $username = loadUsername($u, $conn);
                generateLeaderboardPost($username, $row['user_id'], $row['content'], $row['likes'], $row['post_id'], $count);
            } else {
                echo 'No posts';
            }
        }
    } else {
        echo 'Error retrieving posts.';
    }
}

function generateLeaderboardPost($username, $posterID, $message, $likes, $postID, $count) {
    if ($count <= 3) {
        echo '<div class="flex-row width-100 center-vert">';
        echo '<h1 id="leaderboard-count" class="flex-column center-vert center-hor">#' . $count . '</h1>';
        echo '</div>';
    }
    if ($count === 1) {
        echo '<div id="leaderboard-custom" class="flex-column center-hor center-vert gold">';
    } else if ($count === 2) {
        echo '<div id="leaderboard-custom" class="flex-column center-hor center-vert silver">';
    } else if ($count === 3) {
        echo '<div id="leaderboard-custom" class="flex-column center-hor center-vert bronze">';
    }  else // not top 3
    {
        echo '<div id="not-top-3" class="center-hor center-vert">';
        echo '<h1 >#' . $count . '</h1>';
        echo '<div class="flex-column width-100">';
        echo '<h3>@<a id="help-button" href="user.php?viewUser='.$username.'">'.$username.'</a></h3>';
        echo '</div>';
        echo '<div class="flex-column width-100 center-vert">';
        echo '<h2>'.$message.'</h2>';
        echo '</div>';
    }
    if ($count <= 3) {
        echo '<div class="flex-column center-hor center-vert width-100">';
        echo '<div id="custom-mobile-spacer" class="width-100"></div>';
        echo '<h2>'.$message.'</h2>';
        echo '<h3>@<a id="help-button" href="user.php?viewUser='.$username.'">'.$username.'</a></h3>';
        echo '</div>';
    }
    echo '<div class="flex-row center-hor">';
    echo '<a onclick="addLike(event, '.$postID.','. $posterID.')" id="like-btn"><i class="fa-solid fa-heart"></i></a>';
    echo '<p class="likes-count-custom" id="post-likes-count-' . $postID . '">' . $likes . '</p>';
    echo '<a class="height-5 width-5" onclick="displayCommentBox(event, '.$postID.')" id="comment-btn"><i class="fa-solid fa-comment"></i></a>';
    echo '</div>';
    echo '</div>';
}

// load the settings page ui
function loadSettings() {
    include 'db_conn.php';
    $id = $_SESSION['id'];
    $query = "SELECT * FROM accounts WHERE id = '$id'";
    $result = $conn->query($query);
    if ($result) {
        while ($row = $result->fetch_assoc()) {
            echo '<div id="settings-width" class="flex-column center-vert">';
            echo '<h3>Username: '.$row['username'].'</h3>';
            echo '<h3>Email:    '.$row['email'].'</h3>';
            echo '<form id="update-bio" action="updateBio.php" method="POST">';
            echo '<div class="flex-row center-vert">';
            echo '<textarea class="no-resize comment-box" id="bio-box" name="bio-box" maxlength="43" placeholder="'.$row['bio'].'">'.$row['bio'].'</textarea>';
            echo '</div>';
            echo '<div class="flex-row center-vert">';
            echo '<input type="submit" class="upload-button center-hor" value="Update Bio">';
            echo '</div>';
            echo '</form>';
            echo '
            <form action="uploadPFP.php" method="POST" enctype="multipart/form-data" class="upload-form">
                <label for="profile-picture" class="upload-label">Choose an image:</label>
                <input type="file" id="profile-picture" name="profile_picture" class="upload-input">
                <input type="submit" class="upload-button" value="Upload Image">
            </form>
            ';
            echo '</div>';
            echo '<form action="logout.php" method="POST">';
            echo '<button type="submit">logout</button>';
            echo '</form>';
        }
    }
}