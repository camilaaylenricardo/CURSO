const body = document.body;
const imagen = document.querySelector('.sigue-cursor');

let sigueMouse = false;

body.addEventListener('mousedown', () => {
    sigueMouse = true;
});

body.addEventListener('mouseup', () => {
    sigueMouse = false;
});

body.addEventListener('mousemove', (event) => {
    if (sigueMouse) {

        const x = event.clientX;
        const y = event.clientY;

        imagen.style.top = y + 'px';
        imagen.style.left = x + 'px';
    }
});