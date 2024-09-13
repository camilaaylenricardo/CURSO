let películas = [
    { titulo: 'Titanic', rating: 8.5, loHasVisto: true },
    { titulo: 'Inception', rating: 9.0, loHasVisto: true },
    { titulo: 'The Matrix', rating: 8.7, loHasVisto: false },
    { titulo: 'Interstellar', rating: 9.2, loHasVisto: true },
    { titulo: 'Pulp Fiction', rating: 8.9, loHasVisto: false }
];

for (let i = 0; i < películas.length; i++) {
    let película = películas[i];
    let visto = película.loHasVisto ? 'has visto' : 'no has visto';
    console.log(`Título: ${película.titulo} - Rating: ${película.rating} - ${visto}.`);
}