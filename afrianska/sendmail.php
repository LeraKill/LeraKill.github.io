<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->Charset = 'UTF-8';
$mail->setLanguage('en', 'phpmailer/language/');
$mail->isHTML(true);

//От кого письмо
$mail->setForm('kilinav25@gmail.com', 'LeraKill');
//Кому отправить
$mail->addAddress('kilinav25@gmail.com');
//Тело письма
$mail->Subject = 'Hello!';

//Тело письма
$body = '<h1>Here is my letter to you</h1>';

if(trim(!empty($_POST['name']))){
	$body.='<p><strong>Name:</strong>' .$_POST['name']. '</p>';
}
if(trim(!empty($_POST['email']))){
	$body.='<p><strong>Email:</strong>' .$_POST['email']. '</p>';
}
if(trim(!empty($_POST['text']))){
	$body.='<p><strong>Message:</strong>' .$_POST['text']. '</p>';
}

$mail->Body = $body;

//Отправляем
if(!$mail->send()){
	$message ='Error';
} else{
	$message = 'Form sended';
}

$response = ['message'=>$message];

header('Content-type:application/json');
echo json_encode($response);
?>