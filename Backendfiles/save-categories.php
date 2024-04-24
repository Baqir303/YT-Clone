<?php
session_start();

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
include_once 'db_config.php'; // Ensure this file contains correct database credentials

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"));
    $categories = $data->categories ?? null; // Using null coalescing operator as a fallback

    if (empty($categories)) {
        echo "No categories selected";
        exit;
    }

    $email = $_SESSION['email'] ;

    $categoriesStr = implode(',', $categories);
    echo `email we got is $email`;
    if ($conn) {
        $stmt = $conn->prepare("UPDATE userinfo SET Personalizations = ? WHERE Email = ?");
        if ($stmt) {
            $stmt->bind_param("ss", $categoriesStr, $email);
            if ($stmt->execute()) {
                echo "Categories saved successfully";
            } else {
                echo "Error saving categories: " . $stmt->error;
            }
            $stmt->close();
        } else {
            echo "Error preparing statement: " . $conn->error;
        }
    } else {
        echo "Database connection failed: " . $conn->connect_error;
    }

    $conn->close();
} else {
    echo "Invalid request method";
}
?>
