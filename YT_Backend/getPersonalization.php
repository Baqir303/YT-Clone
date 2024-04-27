<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
session_start();
require_once 'db_config.php';

if (isset($_GET['email'])) {
    $email = $_GET['email'];
    $sql = "SELECT Personalizations FROM userinfo WHERE Email='$email'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        echo json_encode(array('personalization' => $row['Personalizations ']));
    } else {
        echo json_encode(array('personalization' => ''));
    }
} else {
    echo json_encode(array('personalization' => ''));
}

$conn->close();
?>
