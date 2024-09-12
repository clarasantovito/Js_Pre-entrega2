const postres = [
    { producto: "Torta", sabor: ["vainilla", "zanahoria", "chocolate", "marmolado", "limón"], precio: 10000 },
    { producto: "Budin", sabor: ["vainilla", "vainilla con chispas", "chocolate", "chocolate con nueces"], precio: 5000 },
    { producto: "Brownie", sabor: ["chocolate", "chocolate con nueces"], precio: 6000 },
    { producto: "Galletitas", sabor: ["chispas", "chocolate", "red velvet", "oreo"], precio: 5000 },
    { producto: "Alfajor", sabor: ["maizena", "chocolate", "frutos rojos"], precio: 800 }
];

let continuar;
do {
    let productoElegido = prompt("Los productos disponibles son: \n" + postres.map(item => item.producto).join(", ") + "\nElija uno para continuar con la compra:");
    
    mostrarDetallesProducto(productoElegido);

    while(true) {
        continuar = prompt("¿Quieres elegir otro producto? (escribe 'si' para continuar o 'no' para salir)").toLowerCase();

        if(continuar ==="si" || continuar ==="no") {
            break;
        } else {
            continuar = prompt("¿Quieres elegir otro producto? (escribe 'si' para continuar o 'no' para salir)").toLowerCase();
        }
    }
} while (continuar === 'si');

function mostrarDetallesProducto(productoElegido) {
    const productosDisponibles = postres.map(item => item.producto).join(", ");
    
    while (true) {
        const producto = postres.find(item => item.producto.toLowerCase() === productoElegido.toLowerCase());
        
        if (producto) {
            alert("Producto: " + producto.producto + "\nSabor: " + producto.sabor.join(", ") + "\nPrecio: $" + producto.precio);
            break;
        } else {
            productoElegido = prompt("Producto no encontrado. Elija uno de los siguientes productos: \n" + productosDisponibles);
        }
    }

}