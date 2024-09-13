// Constante con las palabras para el juego
const words = [
    'californication',
    'plataforma5',
    'black',
    'summer',
    'flea',
    'aeroplane',
    'peppers',
    'unlimited',
    'arcadium',
    'love',
    'getaway',
    'stadium',
    'quixoticelixer',
    'quarter',
    'snow',
    'dylan',
    'zephyr',
    'funky',
    'chili'
  ];
  
  // Variables globales
  let palabraAleatoria;
  let tiempo = 10;
  let puntaje = 0;
  let timer;
  
  // Referencias a elementos del DOM
  const randomWordDisplay = document.getElementById('randomWord');
  const textInput = document.getElementById('text');
  const timeDisplay = document.getElementById('timeSpan');
  const scoreDisplay = document.getElementById('score');
  const endGameContainer = document.getElementById('end-game-container');
  
  // Función para obtener una palabra aleatoria
  function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  }
  
  // Función para actualizar la palabra aleatoria en el DOM
  function addToDOM() {
    palabraAleatoria = getRandomWord();
    randomWordDisplay.textContent = palabraAleatoria;
  }
  
  // Event listener para el input de texto
  textInput.addEventListener('input', function(e) {
    const palabraIngresada = e.target.value.trim();
    if (palabraIngresada === palabraAleatoria) {
      tiempo += 3;
      addToDOM();
      updateScore();
      textInput.value = '';
    }
  });
  
  // Función para actualizar el tiempo restante
  function actualizarTiempo() {
    timer = setInterval(() => {
      tiempo--;
      timeDisplay.textContent = tiempo + 's';
      if (tiempo === 0) {
        clearInterval(timer);
        gameOver();
      }
    }, 1000);
  }
  
  // Función para actualizar el puntaje
  function updateScore() {
    puntaje++;
    scoreDisplay.textContent = puntaje;
  }
  
  // Función para mostrar el estado final del juego
  function gameOver() {
    endGameContainer.innerHTML = `
      <h2>¡Tiempo agotado!</h2>
      <p>Tu puntaje final es: ${puntaje}</p>
      <button onclick="location.reload()">Reiniciar</button>
    `;
    document.querySelector('.main').style.display = 'none';
  }
  
  // Función principal para iniciar el juego
  function iniciarJuego() {
    addToDOM();
    actualizarTiempo();
  }
  
  // Evento que se dispara al cargar la página
  document.addEventListener('DOMContentLoaded', iniciarJuego);