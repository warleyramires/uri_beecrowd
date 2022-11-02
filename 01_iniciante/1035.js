//TESTE DE SELEÇÃO 1

// Leia 4 valores inteiros A, B, C e D. A seguir, se B for maior do que C e se D for maior do que A, e a soma de C com D for maior que a soma de A e B e se C e D, ambos, forem positivos e se a variável A for par escrever a mensagem "Valores aceitos", senão escrever "Valores nao aceitos".

// Entrada
// Quatro números inteiros A, B, C e D.

// Saída
// Mostre a respectiva mensagem após a validação dos valores.

const prompt = require("prompt-sync")({});

let arrayInteiros = [];
let array = [];

arrayInteiros = prompt();

arrayInteiros = arrayInteiros.split(" ");

console.log(arrayInteiros);

array = arrayInteiros.map(Number);

// for(let inteiro of arrayInteiros){
//     console.log(inteiro)
//     array += Number(inteiro)
// }

console.log(array);

if (array[1] > array[2] && array[3] > array[0]) {
  if ((array[2] + array[3]) > (array[0] + array[1])) {
    if (array[2] > 0 && array[3] > 0) {
      console.log("Valores Aceitos");
    }
  }
} else {
  console.log("Valores não aceitos");
}

// if(((array[1] > array[2]) && (array[3] > array[0])) && ((array[2] + array[3]) > (array[0] + array[1])) && ((array[2] > 0) && (array[3] > 0))){
//   console.log("Valores Aceitos");
// }else{
//   console.log("Valores não aceitos");
// }