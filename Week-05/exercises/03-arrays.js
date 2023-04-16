console.log('--EXERCISE 3.a: ARRAYS');
// a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log(meses[4]);
console.log(meses[11])

console.log('--EXERCISE 3.b: ARRAYS');
// b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
meses.sort();
console.log(meses);

console.log('--EXERCISE 3.c: ARRAYS');
// c. Agregar un elemento al principio y al final del array (utilizar unshift y push).
meses.push('Rojo');
console.log(meses);
meses.unshift('Verde');
console.log(meses);

console.log('--EXERCISE 3.d: ARRAYS');
// d. Quitar un elemento del principio y del final del array (utilizar shift y pop).
meses.pop();
console.log(meses);
meses.shift();
console.log(meses);

console.log('--EXERCISE 3.e: ARRAYS');
// e. Invertir el orden del array (utilizar reverse).
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(meses);
meses.reverse();
console.log(meses);

console.log('--EXERCISE 3.f: ARRAYS');
// f. Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(meses.join('-'));

console.log('--EXERCISE 3.g: ARRAYS');
// g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var copy = meses.slice(4, 11);

console.log(meses);
console.log(copy);