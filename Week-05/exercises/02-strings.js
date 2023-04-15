console.log('--EXERCISE 2.a: STRINGS');
// a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).
var diezCaracteres = 'civilizado'
console.log('civilizado'. toUpperCase());



console.log('--EXERCISE 2.b: STRINGS');
// b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
var palabraLarga = 'semejanzas';
let primerasCinco = palabraLarga.substring(0, 5);

console.log(primerasCinco);

console.log('--EXERCISE 2.c: STRINGS');
// c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).
var diezCaracteres = 'aterrizaje';
let primerasTres = diezCaracteres.substring(0, 3);

console.log(primerasTres);

console.log('--EXERCISE 2.d: STRINGS');
// d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
var palabraLarga = 'cazaclavos';
let primerLetra = palabraLarga.substring(0, 1);

console.log(primerLetra);

console.log('--EXERCISE 2.e: STRINGS');
// e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
var palabraGrande = 'rechazamos ';
let espacio = palabraGrande.indexOf(" ");

console.log(espacio);

console.log('--EXERCISE 2.f: STRINGS');
// f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primer letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).
var dosPalabras = "fundicion  mineral";
let primerEspacio = dosPalabras.indexOf(" ");

let primeraPalabra = dosPalabras.substring(0, primerEspacio);
let segundaPalabra = dosPalabras.substring(primerEspacio + 1);

let primeraPalabraMayuscula = primeraPalabra.charAt(0).toUpperCase() + primeraPalabra.slice(1).toLowerCase();

let segundaPalabraMayuscula = segundaPalabra.charAt(0).toUpperCase() + segundaPalabra.slice(1).toLowerCase();
segundaPalabraMayuscula = segundaPalabraMayuscula.charAt(0).toUpperCase() + segundaPalabraMayuscula.slice(1);
let resultado = primeraPalabraMayuscula + " " + segundaPalabraMayuscula;

console.log(resultado);



