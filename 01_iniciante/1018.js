// Cédulas

// Leia um valor inteiro. A seguir, calcule o menor número de notas possíveis (cédulas) no qual o valor pode ser decomposto. As notas consideradas são de 100, 50, 20, 10, 5, 2 e 1. A seguir mostre o valor lido e a relação de notas necessárias.

// Entrada
// O arquivo de entrada contém um valor inteiro N (0 < N < 1000000).

// Saída
// Imprima o valor lido e, em seguida, a quantidade mínima de notas de cada tipo necessárias, conforme o exemplo fornecido. Não esqueça de imprimir o fim de linha após cada linha, caso contrário seu programa apresentará a mensagem: “Presentation Error”.

const prompt = require('prompt-sync')({sigint: true})

let notasCem, notasCinquenta, notasVinte, notasDez, notasCinco, notasDois, notasUm, resto;
let valorInput = Number(prompt());

notasCem = valorInput / 100;
resto = valorInput % 100;

notasCinquenta = resto / 50;
resto = resto % 50;

notasVinte = resto / 20;
resto  = resto % 20;

notasDez = resto / 10;
resto = resto % 10;

notasCinco = resto / 5;
resto = resto % 5;

notasDois = resto / 2;
resto = resto % 2;

notasUm = resto / 1;
resto = resto % 1;

console.log(`${valorInput}`);
console.log(`${Math.trunc(notasCem)} notas(s) de R$ 100,00`)
console.log(`${Math.trunc(notasCinquenta)} notas(s) de R$ 50,00`)
console.log(`${Math.trunc(notasVinte)} notas(s) de R$ 20,00`)
console.log(`${Math.trunc(notasDez)} notas(s) de R$ 10,00`)
console.log(`${Math.trunc(notasCinco)} notas(s) de R$ 5,00`)
console.log(`${Math.trunc(notasDois)} notas(s) de R$ 2,00`)
console.log(`${Math.trunc(notasUm)} notas(s) de R$ 1,00`)