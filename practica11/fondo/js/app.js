const body = document.body;
const colorInput = document.getElementById('colorInput');

const colores = {
    rojo: 'red',
    azul: 'blue',
    amarillo: 'yellow',
    verde: 'green'
};

colorInput.addEventListener('keyup', (event) => {
    const colorIngresado = event.target.value.trim().toLowerCase();

    const colorFondo = colores[colorIngresado];

    if (colorFondo) {
        body.style.backgroundColor = colorFondo;
    } else {
        body.style.backgroundColor = 'white';
    }
});