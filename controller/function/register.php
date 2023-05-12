<?php
include_once '../../config/config.php';

if(array_key_exists('task',$_GET)){
	$task = $_GET['task'];
}

if($task == 'register'){
	register();
}

function register(){
	global $bdd;
	$name = htmlspecialchars($_POST['name']);
	$lastname = htmlspecialchars($_POST['lastname']);
	$email = htmlspecialchars($_POST['email']);
	$confirmEmail = htmlspecialchars($_POST['confirm-email']);
	$password = htmlspecialchars($_POST['password']);
	$confirmPassword = htmlspecialchars($_POST['confirm-password']);
	
	$verifEmail = null;
	//link verify email
	if($email != $confirmEmail){
		$error = 1;//email et confirm email existe
	}else{
		//sublink verify if email exist
		$selectEmail = $bdd->prepare('SELECT * from user where email=?');
		$selectEmail->execute([$email]);
		foreach ($selectEmail as $data){
			$verifEmail = $data['email'];
		}
		if($verifEmail != null){
			$error = 2; //user existe deja
		}
		else{
			echo $verifEmail;
			//link verify password
			if($password != $confirmPassword){
				$error = 3;// mot de passe et confirm mot de passe non identique
			}else{
				$pass = password_hash($password, PASSWORD_BCRYPT);
				$register  = $bdd->prepare('insert into user set name=?, lastname=?,email=?,password=?');
				$register->execute([$name,$lastname,$email,$pass]);
				$error = 0;// ajout avec success
			}
		}
	}
	$res = ['error'=>$error];
	echo json_encode($res);
}