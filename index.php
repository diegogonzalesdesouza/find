<?php
// definições de host, database, usuário e senha
$host = "localhost";
$db   = "devmedia";
$user = "root";
$pass = "";
// conecta ao banco de dados
$con = mysql_pconnect($host, $user, $pass) or trigger_error(mysql_error(),E_USER_ERROR); 
// seleciona a base de dados em que vamos trabalhar
mysql_select_db($db, $con);
// cria a instrução SQL que vai selecionar os dados
$query = sprintf("SELECT identificador, nome, telefone FROM cadastro");
// executa a query
$dados = mysql_query($query, $con) or die(mysql_error());
// transforma os dados em um array
$linha = mysql_fetch_assoc($dados);
// calcula quantos dados retornaram
$total = mysql_num_rows($dados);
?>

<html>
	<head>
		<title>FIND HR - Plataforma Teste</title>

	    <meta charset="utf-8">
	    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

	   	<!-- CSS -->
	    <link rel="stylesheet" href="css/main.css">
	    <link rel="stylesheet" href="css/normalize.css">
	    <!-- /CSS -->

	    <!-- THIRD PARTIES -->
	    <link rel="icon" type="image/png" href="img/favicon.png" />
	    <script src="https://use.fontawesome.com/e0d1e216e9.js"></script>
		<script src="js/ideal.js"></script>
		<!-- /THIRD PARTIES -->
		
		<!-- FONTS -->
		<link href='http://fonts.googleapis.com/css?family=Indie+Flower' rel='stylesheet' type='text/css'>
		<link href='https://fonts.googleapis.com/css?family=Righteous' rel='stylesheet' type='text/css'>
		<link href='https://fonts.googleapis.com/css?family=Lobster' rel='stylesheet' type='text/css'>
		<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
		<!-- /FONTS -->

		<!-- LIBRARY -->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
		<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.9/jquery-ui.min.js"></script>
		<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
		<link rel="stylesheet" media="screen" href="css/style-particles.css">
		<!-- /LIBRARY -->			
	</head>
	<body onload='ready'>
		<div id='screen-container'>
			<div class="particles-js-placer">
				<div id="particles-js"></div>
				<div id="menu">
					<div id="appear"></div>
					<a href="http://diegogonzalesdesouza.github.io/find/index.php">
						<div id="logo-header"></div>
					</a>
					<li class="item-menu">
						<a href="http://findhr.com.br">Voltar ao Site</a>
					</li>
					<!-- <li class="item-menu">
						<a href="index.html">Candidatos</a>
					</li> -->
				</div>
				<a href="http://diegogonzalesdesouza.github.io/find/index.html">
					<span class='span-title'></span>
				</a>
			</div>
			<div class='game-container'>
				<div id="wrapper">
					<form method="POST" action="login-empresas.php" name="login-form" class="login-form">
						<div class="header">
							<h1>Login</h1>
							<span>Preencha suas informações abaixo para logar em nossa plataforma digital.</span>
						</div>
						<div class="content">
							<input id="login" name="Usuário" type="text" class="input username" placeholder="Nome de Usuário" />
							<div class="user-icon"></div>
							<input id="senha" name="Senha" type="password" class="input password" placeholder="Senha" />
							<div class="pass-icon"></div>
						</div>
						<div class="footer-form">
							<input id="entrar" type="submit" name="submit" value="Entrar" class="button" />
							<!-- <input type="submit" name="submit" value="Criar uma conta" class="register" /> -->
						</div>
					</form>
				</div>
			</div>
			<div class="footer">
				<a href="http://diegogonzalesdesouza.github.io/find">
					<div class="logo"></div>
				</a>
				<div class="texto-footer">FIND Human Resources 2017&nbsp&nbsp-&nbsp&nbspTodos os direitos reservados.</div>
			</div>
		</div>
		<!-- HEADER ON SCROLL -->
		<script>
			$(function() {
			    $(window).on("scroll", function() {
			        if($(window).scrollTop() > $('.particles-js-placer').height()-$('#menu').height()) {
			            document.getElementById("appear").style.display = "block";
			            document.getElementById("logo-header").style.display = "inline-block";
			        } else {
			           document.getElementById("appear").style.display = "none";
			           document.getElementById("logo-header").style.display = "none";
			        }
			    });
			});	
		</script>
		<!-- /HEADER ON SCROLL -->
		
		<!-- SCRIPTS INCEPTION -->
		<script src="particles.js"></script>
		<script src="js/app.js"></script>
		<!-- /SCRIPTS INCEPTION -->
	</body>
</html>
