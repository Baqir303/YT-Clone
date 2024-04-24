
<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');


include_once('./DatabaseConnection/db_config.php');
$name = $_POST['name'];
$email = $_POST['email'];
$password = $_POST['password'];
$query = "INSERT INTO `userinfo` (`FullName`, `Email`, `Password`) VALUES ('$name', '$email', '$password')";
$result = mysqli_query($conn, $query);

if ($result) {
        $response = array('success' => true);
} else {
        $response = array('success' => false);
}
echo json_encode($response);
mysqli_close($conn);
?>
