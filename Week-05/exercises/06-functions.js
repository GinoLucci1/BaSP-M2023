console.log('--EXERCISE 6.a: FUNCTION');
// Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.
var suma = (7 + 5);
function suma () {
    return (7 + 5);
}
console.log (suma);

console.log('--EXERCISE 6.b: FUNCTION');
// Copiar la función suma anterior y agregarle una validación para controlar si alguno de los parámetros no es un número; de no ser un número, mostrar un alert aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.
function result (a, b) {
    if (typeof(a)=='number' && typeof(b)=='number'){
            return (a + b);
        }
        else {
            alert("wrong parameter");
            return (NaN);
        }
    }
console.log(result(9,' '));

console.log('--EXERCISE 6.c: FUNCTION');
// Crear una función “validateInteger” que reciba un número como parámetro y devuelva verdadero si es un número entero.
function validateInteger (number) {
if(Number.isInteger(number)) {
    return true;
    } else {
    return false;
    }
} 
console.log(validateInteger(5));
console.log(validateInteger(5.5)); 

console.log('--EXERCISE 6.d: FUNCTION');
// Copiar y renombrar la función suma del ejercicio 6b) y agregarle una llamada a la función del ejercicio 6c. y que valide que los números sean enteros. En caso que haya decimales mostrar un alert con el error y retornar el número convertido a entero (redondeado).
function volume (a, b) {
        if (!validateInteger(a)) {
            alert('error');
            a = Math.round();
        }
        if (!validateInteger(b)) {
            alert('error');
            b = Math.round();
        }
        if (typeof(a)=='number' && typeof(b)=='number'){
            return (a + b);
        }
        else {
            alert("wrong parameter");
            return (NaN);
        }
    }
console.log (volume(2.5, 5));
console.log (volume(3, 8));

console.log('--EXERCISE 6.e: FUNCTION');
// Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de una nueva función probando que todo siga funcionando igual que en el apartado anterior.
function valor1(a) {
    if (!validateInteger (a)) {
        alert('error');
        a = Math.round(a);
        return a;
    } 
    else {
        return a;
    }
    }
    function valorX(a,b) {
    if (typeof(a) == 'number' && typeof(b) == 'number') {
        a = valor1(a);
        b = valorX(b);
        return (a + b);
    }
    else {
        alert('error de parametro');
    return (NaN);
    }
}
console.log(valor1(3, 4,5));