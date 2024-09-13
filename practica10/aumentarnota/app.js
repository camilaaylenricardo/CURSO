let estudiantes = {
    Juan: 7,
    Camila: 6,
    Pedro: 6,
    Ana: 8,
    Laura: 3
};

for (let estudiante in estudiantes) {
    if (estudiantes[estudiante] > 5) {
        estudiantes[estudiante] = Math.min(estudiantes[estudiante] + 2, 10);
    }
}


console.log(estudiantes);