// Paso 1: Filtrar actores principales cuyo nombre o apellido comience con vocal
let actoresVocales = actoresPrincipales.filter(actor => {
    let primerCaracter = actor.nombre.charAt(0).toLowerCase();
    return 'aeiou'.includes(primerCaracter);
});

// Paso 2 y 3: Iterar sobre actoresPrincipalesPorPelicula para obtener nombres de actores y películas
let actoresPrincipales = [];
let peliculas = [];

for (let pelicula in actoresPrincipalesPorPelicula) {
    let actores = actoresPrincipalesPorPelicula[pelicula];
    actoresPrincipales.push(...actores);

    peliculas.push(pelicula);
}

// Paso 4: Crear un objeto peliculaPorActor con más de una película por actor
let peliculaPorActor = {};

for (let pelicula in actoresPrincipalesPorPelicula) {
    let actores = actoresPrincipalesPorPelicula[pelicula];

    actores.forEach(actor => {
        if (!peliculaPorActor[actor]) {
            peliculaPorActor[actor] = [];
        }
        peliculaPorActor[actor].push(pelicula);
    });
}

// Mostrar resultados en consola para verificar
console.log('Actores con nombres o apellidos que comienzan con vocal:', actoresVocales);
console.log('Actores principales:', actoresPrincipales);
console.log('Películas:', peliculas);
console.log('Películas por actor:', peliculaPorActor);