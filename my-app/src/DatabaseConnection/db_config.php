<?php
$servername = "localhost:3306";
$username = "root";
$password = "";
$database = "yt_clone";

$conn = mysqli_connect($servername, $username, $password, $database);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
?>
