<?php
$servername = "localhost";
$username = "root";
$password = ""; // Replace with your actual password
$dbname = "yt_clone";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// $conn->close();
?>
