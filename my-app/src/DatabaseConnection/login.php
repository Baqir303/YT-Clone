<?php
include_once('db_config.php');

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare statement
$stmt = $conn->prepare('SELECT * FROM userinfo WHERE Email = ? AND Password = ?');
$stmt->bind_param('ss', $email, $password);

// Set parameters and execute
$email = $_POST['email'];
$password = $_POST['password'];
$stmt->execute();

// Process result
$result = $stmt->get_result();
if ($result->num_rows > 0) {
    // User authenticated
    echo 'Logged in';
} else {
    // Incorrect credentials
    echo 'Incorrect credentials';
}

// Close statement and connection
$stmt->close();
$conn->close();
?>
