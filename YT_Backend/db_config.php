<?php
$servername = "localhost";
$username = "root";
$password = ""; 
$dbname = "yt_clone";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
