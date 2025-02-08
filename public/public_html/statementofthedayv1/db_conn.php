<?php

$servername = "localhost";
$username = "ihawzhzm_ihawpREMEMBERMYPASSWORD";
$password = "qr!%WQB?{4b+";
$dbname = "ihawzhzm_statementoftheday";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    echo "Connection failed: " . $conn->connect_error;
    exit;
}

