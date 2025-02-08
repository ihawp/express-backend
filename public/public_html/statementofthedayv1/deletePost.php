<?php

session_start();
include 'db_conn.php';


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $post_id = htmlspecialchars($_POST['post_id']);

    $query = "DELETE FROM posts WHERE (post_id = '$post_id')";
    $result = $conn->query($query);
    if ($result) {
        $query = "DELETE FROM comments WHERE (post_id = '$post_id')";
        $result = $conn->query($query);
        if ($result) {
            $query = "DELETE FROM post_likes WHERE (post_id = '$post_id')";
            $result = $conn->query($query);
            if ($result) {
                return 'true';
            }
        }
    } else {
        return 'false';
    }

    $conn->close();
}