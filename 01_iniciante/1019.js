// Conversão de tempo.

// Leia um valor inteiro, que é o tempo de duração em segundos de um determinado evento em uma fábrica, e informe-o expresso no formato horas:minutos:segundos.

// Entrada
// O arquivo de entrada contém um valor inteiro N.

// Saída
// Imprima o tempo lido no arquivo de entrada (segundos), convertido para horas:minutos:segundos, conforme exemplo fornecido.

const prompt = require('prompt-sync')({sigint: true});

let entradaSegundos, horas, minutos, segundos;

entradaSegundos = Number(prompt());

horas = entradaSegundos/3600;
minutos = (entradaSegundos%3600)/60;
segundos = entradaSegundos%60;

console.log(`${Math.trunc(horas)}:${Math.trunc(minutos)}:${Math.trunc(segundos)}\n\n`)