<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
include_once 'db_config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"));
    $name = $data->name;
    $email = $data->email;
    $password = $data->password;

    // Check if name is empty
    if (empty($name)) {
        echo "Name cannot be empty";
        exit;
    }

    // Check if email is already registered
    $stmt = $conn->prepare("SELECT * FROM userinfo WHERE Email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        echo "Email already registered";
        exit;
    }

    // Insert new user if email is not already registered
    $stmt = $conn->prepare("INSERT INTO userinfo (FullName, Email, Password) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $name, $email, $password);
    $_SESSION['email'] = $email;
    if ($stmt->execute()) {
        echo "Signup successful";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
} else {
    echo "Invalid request method";
}
?>
