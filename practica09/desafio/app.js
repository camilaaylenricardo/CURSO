function fizzBuzz2(contar_hasta, fizz_num, buzz_num, palabra1, palabra2) {
    let resultado = '';

    for (let i = 1; i <= contar_hasta; i++) {
        if (i % fizz_num === 0 && i % buzz_num === 0) {
            resultado += palabra1 + palabra2;
        } else if (i % fizz_num === 0) {
            resultado += palabra1;
        } else if (i % buzz_num === 0) {
            resultado += palabra2;
        } else {
            resultado += i;
        }

        if (i < contar_hasta) {
            resultado += ', ';
        }
    }

    return resultado;
}

// Ejemplo de uso: contar hasta 20, sustituir múltiplos de 3 por "Fizz" y múltiplos de 5 por "Buzz"
let resultado = fizzBuzz2(20, 3, 5, "Fizz", "Buzz");
console.log(resultado);