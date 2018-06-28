<!DOCTYPE HTML>
<!--
	Industrious by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
-->
<html>
	<head>
		<title>Industrious by TEMPLATED</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
		<meta name="description" content="" />
		<meta name="keywords" content="" />
		<link rel="stylesheet" href="assets/css/main.css" />
		<link rel="stylesheet" href="assets/css/icones_signos.css" />
		<link rel="stylesheet" href="assets/css/style.css" />
	</head>

	<body class="is-preload">

		<?php
			include("estrutura/cabecalho.php");
		?>

		<?php
			include("estrutura/menu.php");
		?>

		<?php
			$pagina = "principal";

			if (isset($_GET["p"]))
			{
				if (file_exists("paginas/" . $_GET["p"] . ".php"))
				{
					$pagina = $_GET["p"];
				}
				else
				{
					$pagina = "erro";
				}
			}

			include("paginas/" . $pagina . ".php");
		?>

		<?php
			include("estrutura/rodape.php");
		?>

		<!-- Scripts -->
		<script src="assets/js/jquery.min.js"></script>
		<script src="assets/js/browser.min.js"></script>
		<script src="assets/js/breakpoints.min.js"></script>
		<script src="assets/js/util.js"></script>
		<script src="assets/js/main.js"></script>
<!--		<script src="assets/js/exercicios_javascript.js"></script>-->
		<script src="assets/js/custom.js"></script>

	</body>
</html>
