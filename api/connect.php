<?php
$servername = "localhost";
$username = "root";
$password = "Smetanka2709$";
$dbname = "bas";

$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
