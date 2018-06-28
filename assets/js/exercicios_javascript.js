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
	Crie uma função que receba um número qualquer e exiba-o na tela
	da seguinte forma: "O número recebido é {numero}."
Item 3
	Crie uma função que receba um número qualquer e exiba a multiplicação
	dele por 10, da seguinte forma: "{numero} * 10 = {total}"
 */

/*
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
	if (x >= 10) {
		console.log("Número maior ou igual a 10.")
	}
	else {
		console.log("Número menor que 10.")
	}
}

checarNumero(2);


function checarNumero2(y, k) {
	if (y >= k) {
		console.log("Número maior ou igual a" + k);
	}
	else {
		console.log("Número menor que " + k);
	}
}

checarNumero2(2, 4);

*/

/*
// Item 1
var numero1 = 2;
var numero2 = 3;

console.log(numero1 + numero2);
console.log(numero1 - numero2);
console.log(numero1 / numero2);
console.log(numero1 * numero2);
*/

/*
function exibirNumero(numero) {
	console.log("O número recebido é " + numero + ".")
}

exibirNumero(5);
exibirNumero(8);
exibirNumero(125);
*/

/*
function exibirMultiplicacao(numero) {
	console.log(numero + " * 10 = " + (numero * 10));
}

exibirMultiplicacao(5);
exibirMultiplicacao(8);
exibirMultiplicacao(125);
*/

/*
function exibirMultiplicacao(numero1, numero2) {
	console.log(numero1 + " * " + numero2 + " = " + (numero1 * numero2));
}

exibirMultiplicacao(5, 12);
exibirMultiplicacao(8, 13);
exibirMultiplicacao(125, 14);
*/

/*
function compararNumeros(numero) {
	if (numero < 10) {
		console.log("O número " + numero + " é menor que 10");
	}
	else {
		console.log("O número " + numero + " é maior ou igual a 10");
	}
}

compararNumeros(5);
compararNumeros(10);
compararNumeros(15);
*/

/*
function compararNumeros(numero1, numero2) {
	if (numero1 < numero2) {
		console.log("O número " + numero1 + " é menor que " + numero2);
	}
	else {
		console.log("O número " + numero1 + " é maior ou igual a " + numero2);
	}
}

compararNumeros(5, 6);
compararNumeros(10, 10);
compararNumeros(15, 14);
*/
/*
var numero1 = 10;
var numero2 = 20;
var numero3 = 30;

if (numero1 < numero2 && numero2 > numero3) {
	console.log(numero1 + " < " + numero2 + " && " + numero2 + " > " + numero3);
}

console.log(numero1 + " < " + numero2, numero1 < numero2);
console.log(numero2 + " > " + numero3, numero2 > numero3);
console.log(numero1 + " < " + numero2 + " || " + numero2 + " > " + numero3, numero1 < numero2 || numero2 > numero3);
*/

/*
var verdadeiro = true;
var falso = false;

var numero1 = 58;
var numero2 = 20;
var numero3 = 73;

if (numero1 < numero2 || numero2 > numero3) {
	console.log("Esse código nunca será lido.");
}
else if (numero2 < numero3 && !numero3 < numero1) {
	console.log("Esse código será lido.")
}
else {
	console.log("Esse código nunca será lido.");
}
*/

/*
function compararNumeros(a, b) {
	if (a > b) {
		console.log(a + " maior que " + b);
	}
	else if (b > a) {
		console.log(b + " maior que " + a);
	}
	else {
		console.log(a + " igual a " + b);
	}
}
*/

//var numeros = [1, 2, 3, 4, 5, 30];

// console.log(numeros);
// numeros.push(20);
// console.log(numeros);

// console.log(numeros.length);

// var indice = numeros.indexOf(30);
// console.log(indice);

/*
console.log(numeros);
var ultimoNumero = numeros.pop();
console.log(ultimoNumero);
console.log(numeros);
*/

/*
range(5) = [0, 1, 2, 3, 4]
for i in range(5):
	print(i)

-> 0
-> 1
-> 2
-> 3
-> 4
*/

/*
var numeros = [1, 2, 3, 4, 5, 30];
for (var i = 0; i < numeros.length; i++) {
	console.log(i, numeros[i]);
}
*/

/*
Exercício 1 - Array
Crie um array com 6 números entre 1 e 10
Varra o array usando o for e exiba apenas
os números maiores que 5.

Utilize o mesmo array, crie um novo for e
exiba os números maiores que 7 e os menores de 2

Múltiplo = resto 0, ou seja, 10 % 5 == 0
Declare uma variável numérica com qualquer número entre 10 e 100
Crie um for que cheque todos os números anteriores entre 2 e o número anterior
ao número da variável.
Para cada número dentro do for, cheque se o número digitado é múltiplo dele e exiba
uma mensagem "{numero_digitado} é múltiplo de {i}" ou "... não é múltiplo ...".
Exemplo:
Se o número digitado foi 10:
	 10 não é múltiplo de 9
	 10 não é múltiplo de 8
	 10 não é múltiplo de 7
	 10 é múltiplo de 5
	 10 não é múltiplo de 6
	 10 não é múltiplo de 4
	 10 não é múltiplo de 3
	 10 é múltiplo de 2
*/

/*
// Correção Exercício 1

//var numero_inserido = 5;
function checarMultiplos(numero_inserido) {
	for (var i = 2; i < numero_inserido; i++) {
		var resto = numero_inserido % i;

		if (resto == 0) {
			console.log("O número " + numero_inserido + " é múltiplo de " + i);
		}
		else {
			console.log("O número " + numero_inserido + " não é múltiplo de " + i);
		}
	}
}
*/

/*
// Exercício 2 - Arrays
Crie uma lista com 10 números entre 1 e 20
Varra todos os itens da lista e exiba no console apenas os números pares

// Exercício 3 - Números primos
Declare uma variável numérica com um número qualquer
Faça um for que cheque se esse número é primo ou não e exiba isso no console.
 */

/*
var pessoa = {
	"nome": "Paulo",
	"sobrenome": "Salvatore",
	"idade": 24,
	"nome_completo": function() {
		return this.nome + " " + this.sobrenome;
	}
};

var nomePessoa = pessoa["nome"];
console.log(nomePessoa);
console.log(pessoa.nome);
*/

// Objeto com os valores dos alimentos
// Lista com quais alimentos quer comprar

var dinheiro = 50;

var alimentos = {
	"uva": {
		"preco": 12.5,
		"estoque": 2
	},
	"chocolate": {
		"preco": 14.7,
		"estoque": 0
	}
};

var comprarAlimentos = ["uva", "chocolate"];

var valorTotal = 0;

/*
Objetivo do exercício:
Calcular o valor total da compra
Checar se o alimento está no estoque
Atualizar o estoque conforme a compra
Verificar se há dinheiro suficiente para a compra
Caso não haja dinheiro suficiente para a compra toda, não compra NADA
 */
