// Operaciones básicas en JavaScript

function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

function multiplicacion(a, b) {
    return a * b;
}

function division(a, b) {
    if (b === 0) {
        return "Error: no se puede dividir por cero";
    }
    return a / b;
}

// Ejemplo de uso
let num1 = 10;
let num2 = 5;

console.log("Suma:", suma(num1, num2));
console.log("Resta:", resta(num1, num2));
console.log("Multiplicación:", multiplicacion(num1, num2));
console.log("División:", division(num1, num2));

let num = 5;
let num2 = 2;
console.log("suma", suma(num1, num2));




























