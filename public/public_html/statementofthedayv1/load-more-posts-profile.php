<?php
include 'functions.php';
include 'db_conn.php';

$limit = 25;
$offset = 25;
$s = $_SESSION['id'];

$query = "SELECT * FROM posts WHERE user_id = '$s' ORDER BY timestamp DESC LIMIT $limit OFFSET $offset";
$result = $conn->query($query);

if ($result && $result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $id = $row['user_id'];
        generatePost(loadUsername($id, $conn), $id, $row['content'], $row['likes'], $row['post_id'], getPFP($id, $conn));
    }
} else {
    echo '';
}
