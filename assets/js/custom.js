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
