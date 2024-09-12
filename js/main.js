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

// function mostrarDetallesProducto(productoElegido) {
//     const productosDisponibles = postres.map(item => item.producto).join(", ");
    
//     while (true) {
//         const producto = postres.find(item => item.producto.toLowerCase() === productoElegido.toLowerCase());
        
//         if (producto) {
//             let saborElegido = prompt("Producto: " + producto.producto + "\nSabor: " + producto.sabor.join(", ") + "\nPrecio: $" + 
//             producto.precio + "\n\nElija un sabor:");

//             while (!producto.sabor.includes(saborElegido.toLowerCase())) {
//                 saborElegido = prompt("Sabor no válido. Elija uno de los siguientes sabores: \n" + producto.sabor.join(", "));
//             }

//             let cantidad = prompt("Elegir cantidad del producto");
            
//             while (isNaN(cantidad) || cantidad <= 0) {
//                 cantidad = prompt("Cantidad no válida. Por favor, ingresa un número mayor que 0.");
//             }
//             while {
//             let productoAlCarrito = prompt("Desea añadir el siguiente producto al carrito? \n(" + cantidad + ") " + producto.producto + " de " + saborElegido + " - $" + (cantidad*producto.precio));
//             }
//             break;

//         } else {
//             productoElegido = prompt("Producto no encontrado. Elija uno de los siguientes productos: \n" + productosDisponibles);
//         }
//     }
// }


function mostrarDetallesProducto(productoElegido) {
    const productosDisponibles = postres.map(item => item.producto).join(", ");
    
    while (true) {
        const producto = postres.find(item => item.producto.toLowerCase() === productoElegido.toLowerCase());
        
        if (producto) {
            let saborElegido = prompt("Producto: " + producto.producto + "\nSabor: " + producto.sabor.join(", ") + "\nPrecio: $" + 
            producto.precio + "\n\nElija un sabor:");

            while (!producto.sabor.includes(saborElegido.toLowerCase())) {
                saborElegido = prompt("Sabor no válido. Elija uno de los siguientes sabores: \n" + producto.sabor.join(", "));
            }

            let cantidad = prompt("Elegir cantidad del producto");
            
            while (isNaN(cantidad) || cantidad <= 0) {
                cantidad = prompt("Cantidad no válida. Por favor, ingresa un número mayor que 0.");
            }
            
            let añadirAlCarrito = prompt("Desea añadir el siguiente producto al carrito? \n(" + cantidad + ") " + producto.producto + " de " + saborElegido + " - $" + (cantidad * producto.precio));
            
            while (añadirAlCarrito.toLowerCase() !== 'si' && añadirAlCarrito.toLowerCase() !== 'no') {
                añadirAlCarrito = prompt("Desea añadir el siguiente producto al carrito? \n(" + cantidad + ") " + producto.producto + " de " + saborElegido + " - $" + (cantidad * producto.precio) +
                "\n\nRespuesta inválida. Escriba 'si' para añadir o 'no' para cancelar.");
            }

            if (añadirAlCarrito.toLowerCase() === 'si') {
                alert("El producto ha sido añadido al carrito.");
            } else {
                alert("El producto no ha sido añadido al carrito.");
            }

            break;
        } else {
            productoElegido = prompt("Producto no encontrado. Elija uno de los siguientes productos: \n" + productosDisponibles);
        }
    }
}
