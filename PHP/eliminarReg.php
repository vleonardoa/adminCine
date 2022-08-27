<?php
include("./MySqlConexion.php");
$id = $_GET['id'];
$elim ="DELETE FROM usuarios WHERE id = $id";
$eliminar = mysqli_query($conn, $elim);

$conn -> close();


?>
