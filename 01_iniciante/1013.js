// O MAIOR

// Faça um programa que leia três valores e apresente o maior dos três valores lidos seguido da mensagem “eh o maior”.

// Entrada
// O arquivo de entrada contém três valores inteiros.

// Saída
// Imprima o maior dos três valores seguido por um espaço e a mensagem "eh o maior".

const prompt = require('prompt-sync')({sigint: true})

let arrayNumeros, a, b, c;

arrayNumeros = prompt();

arrayNumeros = arrayNumeros.split(" ");

a = Number(arrayNumeros[0]);
b = Number(arrayNumeros[1]);
c = Number(arrayNumeros[2]);

if(a>b){
    if(a>c){
        console.log(`${a} eh o maior`);
    }else{
        console.log(`${c} eh o maior`);
    }
}else{
    if(b>c){
        console.log(`${b} eh o maior`);
    }else{
        console.log(`${c} eh o maior`)
    }
}