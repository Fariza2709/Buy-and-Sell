<?php
include 'connect.php';

header('Content-Type: application/json');

$sql = "SELECT * FROM users";
$result = $conn->query($sql);

$data = [];
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}

echo json_encode($data);

$conn->close();

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
if (!$result) {
    die("Query failed: " . $conn->error);
}

?>