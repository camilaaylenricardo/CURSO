let miAuto = {};

miAuto.marca = 'Toyota';

miAuto.año = 2022;

miAuto.nuevo = true;

let propertyKey = 'modelo';

miAuto[propertyKey] = 'Corolla';

let anotherPropertyKey = 'precio';

miAuto[anotherPropertyKey] = 25000; 

let nextProperty = 'color';

miAuto[nextProperty] = 'rojo';

for (let key in miAuto) {
    console.log(`${key}: ${miAuto[key]}`);
}