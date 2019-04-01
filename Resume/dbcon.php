 <?php
$server="localhost";
$user="root";
$password="";
$database="culfest";
$con=new mysqli($server,$user,$password,$database);

if($con->connect_error)
	die($con->connect_error);
?>