// Lanche

// Com base na tabela abaixo, escreva um programa que leia o código de um item e a quantidade deste item. A seguir, calcule e mostre o valor da conta a pagar.

// CODIGO       ESPECIFICAÇÃO           PREÇO
// 1            Cachorro quente         R$ 4.00
// 2            x-salada                R$ 4.50
// 3            x-bacon                 R$ 5.00
// 4            Torrada simples         R$ 2.00
// 5            Refrigerante            R$ 1.50

// Entrada
// O arquivo de entrada contém dois valores inteiros correspondentes ao código e à quantidade de um item conforme tabela acima.

const prompt = require("prompt-sync")({ sigint: true });

let input = [];

input = prompt();
let array = input.split(" ");

let [cod, qtd] = array;
cod = Number(cod)
console.log(typeof(cod))
switch (cod) {
  case 1:
    console.log(`Total: R$ ${(qtd * 4.00).toFixed(2)}`);
    break;
  case 2:
    console.log(`Total: R$ ${(qtd * 4.50).toFixed(2)}`);
    break;
  case 3:
    console.log(`Total: R$ ${(qtd * 5.00).toFixed(2)}`);
    break;
  case 4:
    console.log(`Total: R$ ${(qtd * 2.00).toFixed(2)}`);
    break;
  case 5:
    console.log(`Total: R$ ${(qtd * 1.50).toFixed(2)}`);
    break;
  default:
    console.log('Valor inválido')
    break;
}

