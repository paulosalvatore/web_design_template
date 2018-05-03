<?php
	$signos = [
		[
			"nome" => "Áries",
			"data" => "MARÇO 21 - ABRIL 19",
			"icone" => "aries",
			"cor" => "#C1392B"
		],
		[
			"nome" => "Touro",
			"data" => "ABRIL 20 - MAIO 20",
			"icone" => "taurus",
			"cor" => "#27AE61"
		],
		[
			"nome" => "Gêmeos",
			"data" => "MAIO 21 - JUNHO 20",
			"icone" => "gemini",
			"cor" => "#008287"
		],
		[
			"nome" => "Câncer",
			"data" => "JUNHO 21 - JULHO 22",
			"icone" => "cancer",
			"cor" => "#2A80B9"
		],
		[
			"nome" => "Leão",
			"data" => "JULHO 23 - AGOSTO 22",
			"icone" => "leo",
			"cor" => "#D55401"
		],
		[
			"nome" => "Virgem",
			"data" => "AGOSTO 23 - SETEMBRO 22",
			"icone" => "virgo",
			"cor" => "#2FCC71"
		],
		[
			"nome" => "Libra",
			"data" => "SETEMBRO 23 - OUTUBRO 22",
			"icone" => "libra",
			"cor" => "#009CA2"
		],
		[
			"nome" => "Escorpião",
			"data" => "OUTUBRO 23 - NOVEMBRO 21",
			"icone" => "scorpio",
			"cor" => "#3598DC"
		],
		[
			"nome" => "Sagitário",
			"data" => "NOVEMBRO 22 - DEZEMBRO 21",
			"icone" => "sagittarius",
			"cor" => "#F49C14"
		],
		[
			"nome" => "Capricórnio",
			"data" => "DEZEMBRO 22 - JANEIRO 19",
			"icone" => "capricorn",
			"cor" => "#34E17D"
		],
		[
			"nome" => "Aquário",
			"data" => "JANEIRO 20 - FEVEREIRO 18",
			"icone" => "aquarius",
			"cor" => "#00B6BD"
		],
		[
			"nome" => "Peixes",
			"data" => "FEVEREIRO 19 - MARÇO 20",
			"icone" => "pisces",
			"cor" => "#3CA6EF"
		]
	];
?>

<!-- Heading -->
<div id="heading" >
	<h1>Signos</h1>
</div>

<!-- Main -->
<section id="main" class="wrapper">
	<div class="inner">
		<div class="content">
			<header>
				<h2>Signos</h2>
			</header>
			<p>
				Lista de Signos<br>
				<br>

				<?php foreach ($signos as $signo): ?>
					<div class="signo" style="background: <?= $signo["cor"] ?>;">
						<div class="icone">
							<div class="icon-<?= $signo["icone"] ?>"></div>
						</div>
						<div class="nome"><?= $signo["nome"] ?></div>
						<div class="data"><?= $signo["data"] ?></div>
					</div>
				<?php endforeach; ?>

				<div class="clear"></div>
			</p>
		</div>
	</div>
</section>
