<?php
$host = 'localhost';
$dbname = 'assuerplus';
$username = 'root';
//$password = 'password';
$password = 'Danoux10&*';

try{
	$bdd = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8","$username","$password");
}
catch (exception $e){
	die('Erreur : '. $e->getMessage());
}