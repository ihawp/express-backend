<?php

include 'functions.php';
include 'db_conn.php';

$iterations = 25;
$limit = 1; // Maximum number of posts to retrieve
$offset = 1; // Get the offset value from the query string
$followerID = $_SESSION['id'];

for ($i = 0; $i < $iterations; $i++) {
    $query = "SELECT followed_id FROM followers WHERE follower_id = '$followerID'";
    $result = $conn->query($query);

    if ($result && $result->num_rows > 0) {
        $followers_id_array = [];
        while ($row = $result->fetch_assoc()) {
            array_push($followers_id_array, $row['followed_id']);
        }

        // Randomly shuffle the array of followed IDs
        shuffle($followers_id_array);

        // Retrieve posts for each followed ID until reaching the limit
        $totalPosts = 0;
        foreach ($followers_id_array as $followedID) {
            $query = "SELECT * FROM posts WHERE user_id = '$followedID' ORDER BY timestamp DESC LIMIT $limit OFFSET $offset";
            $result = $conn->query($query);

            if ($result && $result->num_rows > 0) {
                while ($row = $result->fetch_assoc()) {
                    $id = $row['user_id'];
                    generatePost(loadUsername($id, $conn), $id, $row['content'], $row['likes'], $row['post_id'], getPFP($id, $conn));
                    $totalPosts++;

                    if ($totalPosts >= $limit) {
                        break 2; // Break both loops when reaching the post limit
                    }
                }
            }
        }

        if ($totalPosts === 0) {
            echo "
                <div class='height-5'></div>
                <div class='flex-column center-hor'>
                    <h1 class=''>No posts found from the people you follow.</h1>
                    <h2 class=''>...but it doesn't have to be that way!</h2>
                    <h1>Click <a href='home.php?show=result' id='help-button' style='color: var(--third-color)'>here</a>.</h1>
                </div>
            ";
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
}
