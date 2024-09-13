var diasDeViaje = parseInt(prompt("¿Cuántos días vas a estar de viaje?"));

var presupuestoMaximo = parseFloat(prompt("¿Cuál es tu presupuesto máximo para todo el viaje?"));

var comida;

var comidasPorDia = 4;
var totalComidas = diasDeViaje * comidasPorDia;

var gastoPorComida = presupuestoMaximo / totalComidas;

alert("Podés gastar " + gastoPorComida.toFixed(2) + " en cada comida para que te alcance la plata durante los " + diasDeViaje + " días de viaje.");