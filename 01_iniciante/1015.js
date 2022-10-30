// Leia os quatro valores correspondentes aos eixos x e y de dois pontos quaisquer no plano, p1(x1,y1) e p2(x2,y2) e calcule a distância entre eles, mostrando 4 casas decimais após a vírgula, segundo a fórmula:

// Distancia = Raiz((x2-x1)² + (y2-y1)²)

// Entrada
// O arquivo de entrada contém duas linhas de dados. A primeira linha contém dois valores de ponto flutuante: x1 y1 e a segunda linha contém dois valores de ponto flutuante x2 y2.

// Saída
// Calcule e imprima o valor da distância segundo a fórmula fornecida, com 4 casas após o ponto decimal.


const prompt = require('prompt-sync')({sigint: true})


let arrayX1Y1, arrayX2Y2, distancia;

arrayX1Y1 = prompt();

arrayX2Y2 = prompt();

arrayX1Y1 = arrayX1Y1.split(" ");
arrayX2Y2 = arrayX2Y2.split(" ");

console.log(arrayX1Y1);
console.log(arrayX2Y2);

distancia = Math.sqrt(Math.pow((arrayX2Y2[0]-arrayX1Y1[0]), 2) + Math.pow((arrayX2Y2[1]-arrayX1Y1[1]), 2))

console.log(distancia.toFixed(4));