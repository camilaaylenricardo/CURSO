let personas = [
    { nombre: 'ana', edad: 28 },
    { nombre: 'maria', edad: 24 },
    { nombre: 'jose', edad: 31 }
];

let personasConMasDe27 = personas.filter(persona => persona.edad > 27);

console.log(personasConMasDe27);