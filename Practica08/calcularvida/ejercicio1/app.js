
var edadActual = parseInt(prompt("Por favor, ingresa tu edad actual:"));


var edadMaxima = parseInt(prompt("Por favor, ingresa tu edad máxima esperada:"));

var snackFavorito = prompt("¿Cuál es tu snack favorito?");

var snacksPorDia = parseInt(prompt("¿Cuántos " + snackFavorito + " comes por día?"));

var añosRestantes = edadMaxima - edadActual;
var snacksPorAño = snacksPorDia * 365;
var snacksRestantes = añosRestantes * snacksPorAño;

alert("Necesitarás " + snacksRestantes + " " + snackFavorito + " para que te alcancen hasta los " + edadMaxima + " años.");

var precioPorSnack = parseFloat(prompt("¿Cuál es el precio por unidad de tu " + snackFavorito + "?"));
var costoTotal = snacksRestantes * precioPorSnack;

alert("Vas a gastar " + costoTotal.toFixed(2) + " en " + snackFavorito + " el resto de tu vida.");