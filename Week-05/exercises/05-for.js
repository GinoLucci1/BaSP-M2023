console.log('--EXERCISE 5.a: FOR');
// Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras.
let palabras = ["rojo", "verde", "azul", "blanco", "naranja"];
for (let i= 0; i < palabras.length; i++) {
    console.log(palabras[i]);
}

console.log('--EXERCISE 5.b: FOR');
// Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada.
for (let i = 0; i < palabras.length; i++) {
    let palabra = palabras[i];
    let primeraLetraMayuscula = palabra.charAt(0).toUpperCase() + palabra.slice(1);
    alert(primeraLetraMayuscula);
}

console.log('--EXERCISE 5.c: FOR');
// Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la cadena completa.
var sentence = ' ' ;
for (let i= 0; i < palabras.length; i++) {
    sentence += palabras [i] + " ";
}

alert(sentence);
console.log('--EXERCISE 5.d: FOR');
// Crear un array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición, es decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array, desde el número 0 hasta al número 9. Mostrar por la consola del navegador el array final (utilizar console.log)
var array1 = [];
for (let i = 0; i < 10; i++) {
    array1[i]=i;
}

console.log(array1);