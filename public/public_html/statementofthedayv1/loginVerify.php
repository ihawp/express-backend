<?php

include 'db_conn.php';

session_start();

$username = htmlspecialchars($_POST['username']);
$password = htmlspecialchars($_POST['password']);

$query = "SELECT * FROM accounts WHERE username = '$username' or email = '$username'";

$result = $conn->query($query);

if ($result) {
    while ($row = $result->fetch_assoc()) {
        $checked = password_verify($password, $row['password']);
        if ($username === $row['username'] && $checked) {
            $_SESSION['username'] = $username;
            $_SESSION['id'] = $row['id'];
            $_SESSION['bio'] = $row['bio'];
            $_SESSION['pfp'] = $row['pfp'];
            header('Location: home.php');
            exit;
        } else {
            header('Location: login.php?error=wrong_password');
            exit;
        }
    }
}

// Redirect to login page in case of failed login
$conn->close();
header('Location: login.php?error=no_user');
exit;

