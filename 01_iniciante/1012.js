// Escreva um programa que leia três valores com ponto flutuante de dupla precisão: A, B e C. Em seguida, calcule e mostre:
// a) a área do triângulo retângulo que tem A por base e C por altura.
// b) a área do círculo de raio C. (pi = 3.14159)
// c) a área do trapézio que tem A e B por bases e C por altura.
// d) a área do quadrado que tem lado B.
// e) a área do retângulo que tem lados A e B.
// Entrada
// O arquivo de entrada contém três valores com um dígito após o ponto decimal.

// Saída
// O arquivo de saída deverá conter 5 linhas de dados. Cada linha corresponde a uma das áreas descritas acima, sempre com mensagem correspondente e um espaço entre os dois pontos e o valor. O valor calculado deve ser apresentado com 3 dígitos após o ponto decimal.

const prompt = require('prompt-sync')({sigint: true})

let a, b, c, areaTriangulo, areaCirculo, areaTrapezio, areaQuadrado, areaRetangulo;
let arrayInput;

arrayInput = prompt()
arrayInput = arrayInput.split(" ");

a = Number(arrayInput[0])
b = Number(arrayInput[1])
c = Number(arrayInput[2])

areaTriangulo = (a*c)/2
areaCirculo = 3.14159 * Math.pow(c,2)
areaTrapezio = ((a + b)*c)/2
areaQuadrado = Math.pow(b,2)
areaRetangulo = a * b;

console.log(`TRIANGULO: ${areaTriangulo.toFixed(3)}\nCIRCULO: ${areaCirculo.toFixed(3)}\nTRAPEZIO ${areaTrapezio.toFixed(3)}\nQUADRADO ${areaQuadrado.toFixed(3)}\nRETANGULO ${areaRetangulo.toFixed(3)}\n`)
