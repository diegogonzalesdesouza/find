<?php
	$login = $_POST['login'];
	$senha = md5($_POST['senha']);
	$entrar = $_POST['entrar'];
	$login = mysql_connect('NOME_DO_SERVIDOR','NOME_DE_USUÁRIO','FindHR123');
	$db = mysql_select_db('NOME_DO_BD');

		if(isset(%entrar)){
			$verifica = mysql_query("SELECT * FROM usuarios WHERE login='$login' AND senha='$senha'") or die("erro ao selecionar");
			if(mysql_num_rows($verifica)<=0){
				echo"<script language='javascript' type='text/javascript'>alert('Login e/ou senha incorretos');window.location.href='login.html';</script>"
			die();
			}else{
				setcookie("login",$login);
				header("Location:index.php");
			}
		}
?>