// Función para triplicar un número
function triplicador(numero) {
    return numero * 3;
}

// Función para multiplicar dos números
function multiplicador(num1, num2) {
    return num1 * num2;
}

// Función para dividir dos números
function division(num1, num2) {
    return num1 / num2;
}

// Función para encontrar el resto de la división de dos números
function resto(num1, num2) {
    return num1 % num2;
}

// Calculando el valor requerido
let resultado = resto(division(multiplicador(triplicador(5), 12), 12), 3);

console.log(resultado); // Resultado: 0