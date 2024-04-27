<?php
session_start(); // Start the session

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
include_once 'db_config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"));
    $categories = $data->categories;
    $email = $data->email;
    
    if (empty($categories)) {
        echo "No categories selected";
        exit;
    }

    // if(isset($email)){
    //     echo "<script>console.log('$email');</script>";
    // } else {
    //     echo "Email not found in session\n";
    //     exit;
    // }

    // echo "Categories received: " . implode(',', $categories) . "\n";

    $stmt = $conn->prepare("UPDATE userinfo SET Personalizations = ? WHERE Email = ?");
    $stmt->bind_param("ss", $categoriesStr, $email);

    $categoriesStr = implode(',', $categories);

    if ($stmt->execute()) {
        echo "Categories saved successfully";
    } else {
        // echo "Error: " . $stmt->error;
    }

    $stmt->close();
} else {
    echo "Invalid request method";
}

$conn->close();
?>
