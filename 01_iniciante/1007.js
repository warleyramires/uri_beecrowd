// DIFERENÇA

// Leia quatro valores inteiros A, B, C e D. A seguir, calcule e mostre a diferença do produto de A e B pelo produto de C e D segundo a fórmula: DIFERENCA = (A * B - C * D).

// Entrada
// O arquivo de entrada contém 4 valores inteiros.

// Saída
// Imprima a mensagem DIFERENCA com todas as letras maiúsculas, conforme exemplo abaixo, com um espaço em branco antes e depois da igualdade.

const prompt = require('prompt-sync')({sigint: true})

let a, b, c, d, diferenca;

a = Number(prompt());
b = Number(prompt());
c = Number(prompt());
d = Number(prompt());

diferenca = a * b - c * d

console.log(`DIFERENCA = ${diferenca}`);