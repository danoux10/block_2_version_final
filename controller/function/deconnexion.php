<?php

include_once '../../config/config.php';

if (array_key_exists('task', $_GET)) {
	$task = $_GET['task'];
}

if ($task == 'deconnexion') {
	deconnexion();
}

function deconnexion()
{
	setcookie('userId', null, time() + (20 * 265 * 24 * 60 * 60), '/');
	$error = 0;
	$res = ['error' => $error];
	echo json_encode($res);
	header('location:../../index.php');
	die();
}