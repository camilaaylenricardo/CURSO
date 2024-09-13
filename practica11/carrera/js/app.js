document.addEventListener('DOMContentLoaded', () => {
    const autoRojo = document.getElementById('autoRojo');
    const autoAzul = document.getElementById('autoAzul');
    const pistaWidth = document.querySelector('.pista').offsetWidth;

    let acumuladorRojo = 0;
    let acumuladorAzul = 0;

    window.addEventListener('keyup', (event) => {
        // Movimiento del auto rojo con la tecla 'R'
        if (event.key === 'r' || event.key === 'R') {
            acumuladorRojo++;
            autoRojo.style.marginLeft = acumuladorRojo + 'px';

            if (acumuladorRojo >= pistaWidth - autoRojo.offsetWidth) {
                alert('¡El auto rojo ganó la carrera!');
                resetearCarrera();
            }
        }

        // Movimiento del auto azul con la tecla 'A'
        if (event.key === 'a' || event.key === 'A') {
            acumuladorAzul++;
            autoAzul.style.marginLeft = acumuladorAzul + 'px';

            if (acumuladorAzul >= pistaWidth - autoAzul.offsetWidth) {
                alert('¡El auto azul ganó la carrera!');
                resetearCarrera();
            }
        }
    });

    function resetearCarrera() {
        acumuladorRojo = 0;
        acumuladorAzul = 0;
        autoRojo.style.marginLeft = '0px';
        autoAzul.style.marginLeft = '0px';
    }
});