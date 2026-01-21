<?php
$login = $_GET['login'];
$senha = $_GET['senha'];

$valor_senha = 12345;
$valor_login = 67890;

if($login == $valor_login && $senha == $valor_senha){
    echo "Logado!";
} else {
    echo "login ou senha inválidos!";
}

?>