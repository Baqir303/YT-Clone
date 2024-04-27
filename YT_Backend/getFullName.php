<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
include_once 'db_config.php';

if (isset($_GET['email'])) {
    $email = $_GET['email'];

    
    $stmt = $conn->prepare("SELECT FullName FROM userinfo WHERE Email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $fullName = $row['FullName'];
        
        echo json_encode(array("fullName" => $fullName));
    } else {
        
        echo json_encode(array("fullName" => null));
    }

    
    $stmt->close();
} else {
    
    echo json_encode(array("error" => "Email parameter is missing"));
}


$conn->close();
?>
