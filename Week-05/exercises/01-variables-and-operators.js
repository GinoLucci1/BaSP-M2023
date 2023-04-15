//Variables y Operadores
console.log('--EXERCISE 1.a: VARIABLES AND OPERATORS');
/* a. Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números en una 3er variable.*/
var A= 1;
var B= 2;
var C= A+B;
console.log(C);



console.log('--EXERCISE 1.b: VARIABLES AND OPERATORS');
/* b. Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.*/
var nombre1 = 'Hola'
var nombre2 = 'Mundo'
let concatenacion = nombre1 + nombre2;
console.log("La concatenación de los dos Strings es: " + concatenacion);



console.log('--EXERCISE 1.c: VARIABLES AND OPERATORS');
/* c. Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando el resultado de la suma en una 3er variable (utilizar length)*/
var palabra1= 'Buen'
var palabra2= 'Día'
let longitudTotal = palabra1.length + palabra2.length;
console.log('La longitud total de los dos strings es:' + longitudTotal);