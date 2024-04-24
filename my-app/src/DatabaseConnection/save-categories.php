<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
include_once 'db_config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"));
    $email = $data->email;
    $categories = $data->categories;

    // Update the Personalizations column for the user
    $stmt = $conn->prepare("UPDATE userinfo SET Personalizations = ? WHERE Email = ?");
    $stmt->bind_param("ss", implode(',', $categories), $email);

    if ($stmt->execute()) {
        echo "Categories saved successfully";
    } else {
        echo "Error updating categories";
    }

    $stmt->close();
} else {
    echo "Invalid request method";
}
?>
