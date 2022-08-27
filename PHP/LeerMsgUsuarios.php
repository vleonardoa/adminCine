<?php
include("./MySqlConexion.php");
/* obtener un array asociativo 
	https://www.php.net/manual/es/mysqli-result.fetch-assoc.php
	*/
    $sql = "SELECT * FROM usuarios";
    $response = array();

    if ($resultado = mysqli_query($conn, $sql)) {
    
        /* obtener array asociativo */
        while ($row = mysqli_fetch_assoc($resultado)) {
            $emparray[] = $row;
        }
        
        $response["status"] = 200;
        $response["message"] = $emparray;
        /* liberar el conjunto de resultados */
        mysqli_free_result($resultado);
    }
    else{
        $response["status"] = 400;
        $response["message"] = "Registros no encontrados";
    }

    echo json_encode($response);
$conn->close();
?>