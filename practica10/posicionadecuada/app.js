let personas = [
    { nombre: 'Ana', edad: 28 },
    { nombre: 'María', edad: 24 },
    { nombre: 'José', edad: 31 },
    { nombre: 'Pedro', edad: 22 }
];

personas.sort((a, b) => a.edad - b.edad);

personas.forEach((persona, index) => {
    persona.posicion = index + 1; 
});

console.log(personas);