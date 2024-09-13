function calcularValorTotalProductos(productos) {
    let valorTotalProductos = {};

   productos.forEach(producto => {
        let { nombre, cantidad, precioUnitario } = producto;

        let valorTotal = cantidad * precioUnitario;

         if (valorTotalProductos[nombre]) {
            valorTotalProductos[nombre] += valorTotal;
        } else {
            valorTotalProductos[nombre] = valorTotal;
        }
    });

    let resultado = Object.keys(valorTotalProductos).map(nombre => `${nombre}: ${valorTotalProductos[nombre]}`);

    return resultado;
}

let productos = [
    { nombre: 'Samsung TV', cantidad: 10, precioUnitario: 6000 },
    { nombre: 'Dell Notebook', cantidad: 30, precioUnitario:4000  },
    { nombre: 'Auriculares Sony', cantidad: 15, precioUnitario: 1500 },
    { nombre: 'Monitor Philips', cantidad: 20, precioUnitario: 12000 },
    { nombre: 'Teclado Logitech', cantidad: 5, precioUnitario: 3000 }
];

let resultado = calcularValorTotalProductos(productos);
console.log(resultado);