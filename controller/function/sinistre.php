<?php

include_once '../../config/config.php';

if (array_key_exists('task', $_GET)) {
	$task = $_GET['task'];
}

if ($task == 'sinistre') {
	sinistre();
}

function sinistre()
{
	date_default_timezone_set('Europe/Paris');
	global $bdd;
	$dir = '../../image/';
	$date = date('d-m-Y');
	$userId = $_COOKIE['userId'];
	$info = $bdd->prepare('SELECT * FROM user where idUser=?');
	$info->execute([$userId]);
	foreach ($info as $data) {
		$name = $data['name'];
		$lastname = $data['lastname'];
	}
	$username = $name . '-' . $lastname;
	$startName = $date . '-' . $username . '-';
	//link move file and rename
	foreach ($_FILES['photo']['tmp_name'] as $key => $tmp_name) {
		$filename = $_FILES['photo']['name'][$key];
		$fileTmp = $_FILES['photo']['tmp_name'][$key];
		$fileExt = strtolower(pathinfo($filename, PATHINFO_EXTENSION));
		$new_filename = uniqid($startName) . '.' . $fileExt;
		$destination = $dir . $new_filename;
		move_uploaded_file($fileTmp, $destination);
		$insertImage = $bdd->prepare('insert into url set image=?, user=?');
		$insertImage->execute([$destination, $userId]);
	}
	$error = '0';
	$res = ['error' => $error];
	echo json_encode($res);
}