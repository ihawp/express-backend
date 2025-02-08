<?php

session_start();
include 'db_conn.php';


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $comment_id = htmlspecialchars($_POST['comment_id']);

    $query = "DELETE FROM comments WHERE (comment_id = '$comment_id')";
    $result = $conn->query($query);
    if ($result) {
        return 'true';
    } else {
        return 'false';
    }
}
$conn->close();