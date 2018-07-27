/*var bloco = document.getElementById("teste");

function evento() {
	if (bloco.innerText == "Oi") {
		bloco.innerText = "Tchau";
	}
	else {
		bloco.innerText = "Oi";
	}
}

bloco.onmousedown = evento;
bloco.onmouseup = evento;
bloco.onmouseleave = function() {
	if (bloco.innerText == "Tchau") {
		bloco.innerText = "Saudades";
	}
};*/

/*
Toda vez que o mouse se mexer no 'body', atualize
uma variável 'contador' acrescentando '1' e exiba
o valor da variável no 'innerText' do 'bloco'
*/

/*var body = document.getElementsByTagName("body")[0];
var bloco = document.getElementById("teste");

var contador = 0;

body.onmousemove = function() {
	contador++;

	bloco.innerText = contador;
};*/

/*
Exercício - Jogo (JavaScript)
Teremos três quadrados com as respectivas
cores: verde, vermelho e amarelo.
Um outro quadrado grande sorteará uma cor aleatória
Dependendo da cor que for, o jogador deverá
passar o mouse em cima do quadrado que corresponde
a cor certa.
Se acertar, soma 1 acerto e atualiza o valor
Se errar, soma 1 erro e atualiza o valor
Quando chegar a 10 acertos, exibe o alerta "Você ganhou"
Quando chegar a 3 erros, exibe o alerta "Você perdeu"
 */

/*
// Seleção de elementos pelo ID
var cores = ["verde", "vermelho", "amarelo"];
var elementosCores = [];

for (var i = 0; i < cores.length; i++) {
	var cor = cores[i];
	var elemento = document.getElementById(cor);
	elementosCores.push(elemento);
}
*/

// Correção do exercício

// Seleção de elementos pela classe
var elementosCores = document.getElementsByClassName("bloco_escolha");

var blocoPrincipal = document.getElementById("bloco_principal");

var acertos = 0;
var acertosPermitidos = 10;
var blocoAcertos = document.getElementById("acertos");

var erros = 0;
var errosPermitidos = 3;
var blocoErros = document.getElementById("erros");

var intervaloCores = 300;

function definirCorAleatoria() {
	if (!checarJogoRodando()) {
		return;
	}

	var indiceAleatorio = Math.floor((Math.random() * elementosCores.length));
	var elementoAleatorio = elementosCores[indiceAleatorio];
	var corAleatoria = pegarCorElemento(elementoAleatorio);
	blocoPrincipal.style.backgroundColor = corAleatoria;
}

function pegarCorElemento(elemento) {
	return window.getComputedStyle(elemento, null).getPropertyValue("background-color");
}

setInterval(definirCorAleatoria, intervaloCores);

function checarJogoRodando() {
	return acertos < acertosPermitidos && erros < errosPermitidos;
}

function checarJogoFinalizado() {
	if (!checarJogoRodando()) {
		if (acertos === acertosPermitidos) {
			alert("Você ganhou!");
		}
		else {
			alert("Você perdeu!");
		}
	}
}

for (var i = 0; i < elementosCores.length; i++) {
	elementosCores[i].onmouseenter = function() {
		if (!checarJogoRodando()) {
			return;
		}

		var cor = pegarCorElemento(this);
		var corBlocoPrincipal = pegarCorElemento(blocoPrincipal);

		if (cor === corBlocoPrincipal) {
			acertos++;
			blocoAcertos.innerText = acertos;
		} else {
			erros++;
			blocoErros.innerText = erros;
		}

		/*
		Utilizaremos o setTimeout apenas para exibir o alerta
		em caso de condição de vitória/derrota após o bloco de acertos
		ou de erros ter sido atualizado corretamente.
		O setTimeout basicamente irá executar uma determinada função
		após um tempo especificado em millissegundos.
		 */
		setTimeout(checarJogoFinalizado, 0);
		// checarJogoFinalizado();
	};
}

// Detectar evento de mouseenter no bloco de escolha
// Checar se a cor do bloco onde está o mouse é igual ou diferente
// Contabilizo acerto ou erro

/*
// Meus testes
var cores = ["verde", "vermelho", "amarelo"];
var elementosCores = [];

var intervaloCores = 3000;
var delayAposAcao = 1000;

var acertos = 0;
var erros = 0;
var blocoAcertos = document.getElementById("acertos");
var blocoErros = document.getElementById("erros");

var acertosPermitidos = 10;
var errosPermitidos = 3;

var eventoContabilizarErro;

var corDefinida = false;
var tempoInicial = 0;
var blocoTempo = document.getElementById("tempo");

var blocoPrincipal = document.getElementById("bloco_principal");
var blocosEscolha = document.getElementsByClassName("bloco_escolha");

var blocoStatus = document.getElementById("status");

for (var i = 0; i < cores.length; i++) {
	var corId = cores[i];
	elementosCores.push(document.getElementById(corId))
}

function alterarCorBloco(elemento, cor) {
	elemento.style.backgroundColor = cor;
}

function copiarCorBloco(elemento, elementoCor) {
	elemento.style.backgroundColor = pegarCorBloco(elementoCor);
}

function definirCorAleatoria() {
	limparStatus();

	var indiceCorAleatoria = Math.floor(Math.random() * elementosCores.length);
	var elementoCorAleatoria = elementosCores[indiceCorAleatoria];

	copiarCorBloco(blocoPrincipal, elementoCorAleatoria);

	corDefinida = true;
	tempoInicial = new Date().getTime();

	eventoContabilizarErro = setTimeout(contabilizarErro, intervaloCores);
}

function pegarCorBloco(elemento) {
	return window.getComputedStyle(elemento, null).getPropertyValue("background-color");
}

function atualizarPlacar() {
	blocoAcertos.innerText = acertos;
	blocoErros.innerText = erros;
}

function atualizarStatus(mensagem, cor) {
	blocoStatus.innerText = mensagem;
	blocoStatus.style.color = cor;
}

function limparStatus() {
	atualizarStatus("", "");
}

function checarVictoria() {
	if (acertos === acertosPermitidos) {
		atualizarStatus("Você ganhou o jogo!", "green");
		return true;
	} else if (erros === errosPermitidos) {
		atualizarStatus("Você perdeu o jogo!", "red");
		return true;
	} else {
		return false;
	}
}

function atualizarJogo() {
	clearTimeout(eventoContabilizarErro);

	alterarCorBloco(blocoPrincipal, "black");
	corDefinida = false;

	if (!checarVictoria()) {
		setTimeout(definirCorAleatoria, delayAposAcao);
	}

	atualizarPlacar();
}

function contabilizarAcerto() {
	acertos++;

	atualizarStatus("Você acertou!", "green");

	atualizarJogo();
}

function contabilizarErro() {
	erros++;

	atualizarStatus("Você errou!", "red");

	atualizarJogo();
}

function atualizarTempo() {
	if (corDefinida) {
		var tempoAtual = (intervaloCores - (new Date().getTime() - tempoInicial)) / 1000;
		blocoTempo.innerText = "Tempo restante: " + tempoAtual.toFixed(2);
	} else {
		blocoTempo.innerText = "";
	}
}

setInterval(atualizarTempo, 50);

atualizarPlacar();

definirCorAleatoria();

for (var j = 0; j < blocosEscolha.length; j++) {
	blocosEscolha[j].onmouseenter = function() {
		if (!corDefinida)
			return;

		var corBlocoAtual = pegarCorBloco(this);
		var corBlocoPrincipal = pegarCorBloco(blocoPrincipal);

		if (corBlocoAtual === corBlocoPrincipal) {
			contabilizarAcerto();
		} else {
			contabilizarErro();
		}
	}
}
 */
