<?php

$user = $_POST['user'];
$pass = $_POST['pass'];

if($user === '' || $pass === ''){
  echo json_encode('error');
}else{
  echo json_encode('Correcto: <br>Usuario: '.$user.' <br>Pass: '.$pass);
}
