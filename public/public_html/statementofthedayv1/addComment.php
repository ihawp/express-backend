<?php
session_start();
include 'db_conn.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $post_id = htmlspecialchars($_POST['post_id']);
    $user_id = $_SESSION['id'];
    $content = htmlspecialchars($_POST['comment-box']);

    if ($content === "") {
        header('Location: home.php?theresnothinginthemessagebox');
        exit;
    }

    // Fix the SQL query syntax
    $query = "INSERT INTO comments (post_id, user_id, content, timestamp) VALUES ('$post_id', '$user_id', '$content', CURRENT_TIMESTAMP())";
    $result = $conn->query($query);

    if ($result) {
        header('Location: home.php?commentadded');
        exit;
    } else {
        header('Location: home.php?commentnotadded');
        exit;
    }
}

$conn->close();
