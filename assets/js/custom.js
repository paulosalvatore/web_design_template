// Para exibir um alerta na página:
// alert("Paulo");

// var confirmacao = confirm("Paulo");

/*
var mensagem = "Minha mensagem.";

if (confirm(mensagem)) {
	console.log("OK pressionado.");
}
else {
	console.log("Cancelar pressionado.");
}
*/

// Variável numérica
/*var numero = 1;
var numeroT = "2";
var texto = "Texto";
var verdadeiro = true;
var falso = false;

function somar(numero1, numero2) {
	//console.log(numero1, numero2);

	//var soma = numero1 + numero2;
	//console.log("soma", soma);

	return numero1 + numero2;
}
*/
//somar(5, 10);
//somar(numero, numeroT);

/*
Exercício 1
Escreve uma função que receba um número
e retorne true caso esse número seja par
e false caso esse número seja ímpar

Chame a função depois de ter declarado e,
caso seja true, exiba: "O número {numero} é
{par/impar}"
*/

/*
// Correção Exercício 1
function checarPar(numero) {
	if (numero % 2 == 0) {
		return true;
	}
	else {
		return false;
	}

	// Pode ser substituído por:
	// return numero % 2 == 0;
}

var n = 5;
if (checarPar(n)) {
	console.log("O número " + n + " é par.");
}
else {
	console.log("O número " + n + " é ímpar.");
}
*/

/*
Exercício 2
Após terminar e testar cada item, comente os valores escritos
Item 1
	Declare 2 variáveis numéricas
	Exiba no console o resultado das operações básicas entre
	essas variáveis
	Adição, Subtração, Divisão e Multiplicação
Item 2
	Crie uma função que receba um número qualquer e exiba o na tela
	da seguinte forma: "O número recebido é {numero}."
Item 3
	Crie uma função que receba um número qualquer e exiba a multiplicação
	dele por 10, da seguinte forma: "{numero} * 10 = {total}"
 */

var numero1 = 70;
var numero2 = 30;

console.log(numero1 + numero2);
console.log(numero1 - numero2);
console.log(numero1 / numero2);
console.log(numero1 * numero2);

function exibirNumero(numero) {
	console.log("O número recebido é "+ numero +".")
}

exibirNumero(numero1);

function exibirMultiplicacao(numero) {
	console.log("O número recebido multiplicado por 10 é "+ numero * 10 +".");
	console.log(numero + " * 10 = " + numero * 10);
}

exibirMultiplicacao(5);


function exibirMultiplicacao2(numero, m) {
	// 5 * 3 = 15
	// "{0} * {1} = {2}".format(5, 3, 5 * 3)
	// "{0} * {1} = {2}".format(numero, m, numero * m)
	console.log(numero + " * " + m + " = " + numero * m);
}

exibirMultiplicacao2(5, 3);

function checarNumero(x) {
	if (x>= 10) {
		console.log("Número maior ou igual a 10.")
	}
	else {
		console.log("Número menor que 10.")
	}
}

checarNumero(2);


function checarNumero2(y,k) {
	if (y>= k) {
		console.log("Número maior ou igual a" +k );
	}
	else {
		console.log("Número menor que " +k );
	}
}

checarNumero2(2,4);

