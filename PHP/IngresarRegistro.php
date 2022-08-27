<?php
include("./MySqlConexion.php");
    //INSERT INTO MYSQLI
    //https://www.w3schools.com/php/php_mysql_insert.asp

    // Obtenemos los valores que vendran dentro del post
    
    // Receive JSON POST Data Using PHP
    //https://www.pakainfo.com/receive-json-post-data-using-php/

    // simple get takes raw data from the request 
    $json = file_get_contents('php://input'); 

    // Simple Converts it into a PHP object 
    $data = json_decode($json); 
    
    $sql = "INSERT INTO usuarios (nombre, apellido, mensaje, fecha) VALUES ('$data->nombre', '$data->apellido','$data->mensaje', NOW())";

    if ($conn->query($sql) === TRUE) {
        $response["status"] = 200;
        $response["message"] = "New record created successfully";
    } else {
        $response["status"] = 400;
        $response["message"] = "Error: " . $sql . "<br>" . $conn->error;
    }

echo json_encode($response);
$conn->close();
?>