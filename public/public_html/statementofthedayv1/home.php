<?php


include 'functions.php';
checkLogin();

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
</head>
<body class="flex-column center-hor" id="body">
<?php
loadHeader();
?>
<div class="flex-column center-hor">
    <form class="flex-column" action="postPost.php" method="POST">
        <div>
            <textarea class="no-resize" id="post-box" name="post" placeholder="say something!" maxlength="255"></textarea>
            <div id="post-button-div" class="flex-column center-hor">
                <button type="submit"><i class="fa-solid fa-share"></i></button>
            </div>
        </div>
    </form>
</div>
<div class="flex-column center-hor" id="posts-box">
    <div class="flex-row center-hor center-vert">
        <a href="home.php?show=recent" id="anyone-post-section-button" class="flex-column center-vert center-hor">
            <h1>recent</h1>
        </a>
        <a href="home.php?show=following" id="following-post-section-button" class="flex-column center-vert center-hor">
            <h1>following</h1>
        </a>
    </div>

    <?php
    loadPostsInfo();
    ?>
</div>
<?php
if (isset($_GET['show']) && $_GET['show'] === 'following') {
    echo '<button onclick="loadMorePostsFollowing()">load posts</button>';
} else {
    echo '<button onclick="loadMorePosts()">load posts</button>';
}

loadFooter();
?>
<script src="https://kit.fontawesome.com/99a47fae58.js" crossorigin="anonymous"></script>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="main.js"></script>
</body>
</html>

