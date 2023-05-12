<?php
include_once '../../config/config.php';

if(array_key_exists('task',$_GET)){
	$task = $_GET['task'];
}

setcookie('userId',null,time()+(20*265*24*60*60),'/');


if($task == 'login'){
	login();
}

function login(){
	global $bdd;
	$email = htmlspecialchars($_POST['email']);
	$password = htmlspecialchars($_POST['password']);
	
	$takeData = $bdd->prepare('select * from user where email=?');
	$takeData -> execute([$email]);
	
	$dataEmail = null;
	
	foreach ($takeData as $data){
		$dataEmail = $data['email'];
		$encodePass = $data['password'];
		$userId = $data['idUser'];
	}
	if($email == $dataEmail){
		if(password_verify($password,$encodePass)){
			setcookie('userId',$userId,time()+(20*265*24*60*60),'/');
			$error = 0;//connexion success
		}else{
			$error = 2;//error password
		}
	}else{
		$error = 1;//email entré n'existe pas
	}
	$res = ['error'=>$error];
	echo json_encode($res);
}