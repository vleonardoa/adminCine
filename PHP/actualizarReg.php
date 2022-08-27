<?php
include("./MySqlConexion.php");
$id = $_GET['id'];
$nombre = $_GET['nombre'];
$apellido = $_GET['apellido'];
$mensaje = $_GET['mensaje'];
$sql = "UPDATE usuarios SET nombre='$nombre', apellido='$apellido', mensaje='$mensaje' WHERE id='$id'";
$resultado = mysqli_query($conn,$sql);
if($resultado){
    echo "Registro actualizado";}

$conn -> close();


?>
