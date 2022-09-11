// CALCULO SIMPLES

// Neste problema, deve-se ler o código de uma peça 1, o número de peças 1, o valor unitário de cada peça 1, o código de uma peça 2, o número de peças 2 e o valor unitário de cada peça 2. Após, calcule e mostre o valor a ser pago.

// Entrada
// O arquivo de entrada contém duas linhas de dados. Em cada linha haverá 3 valores, respectivamente dois inteiros e um valor com 2 casas decimais.

// Saída
// A saída deverá ser uma mensagem conforme o exemplo fornecido abaixo, lembrando de deixar um espaço após os dois pontos e um espaço após o "R$". O valor deverá ser apresentado com 2 casas após o ponto.

const prompt = require('prompt-sync')({sigint: true})

let stringProdUm, stringProdDois
let arrayUm, arrayDois, resultadoUm, resultadoDois
let totalAPagar;

stringProdUm = prompt();
arrayUm = stringProdUm.split(" ");
resultadoUm = arrayUm[1] * arrayUm[2];

stringProdDois = prompt();
arrayDois = stringProdDois.split(" ");
resultadoDois = arrayDois[1] * arrayDois[2];

totalAPagar = resultadoUm + resultadoDois


console.log(`VALOR A PAGAR: ${totalAPagar.toFixed(2)}\n`);
