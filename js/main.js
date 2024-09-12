// Productos del market
const productos = [
    { nombre: "Chocolate", tipo: "Dulce", precio: 100 },
    { nombre: "Galletas", tipo: "Dulce", precio: 50 },
    { nombre: "Empanada", tipo: "Salada", precio: 150 },
    { nombre: "Pizza", tipo: "Salada", precio: 200 }
];

// Carrito vacío
let carrito = [];

// Función para agregar productos al carrito
function agregarAlCarrito(nombreProducto) {
    const producto = productos.find(p => p.nombre === nombreProducto);
    if (producto) {
        carrito.push(producto);
        console.log(`${producto.nombre} agregado al carrito.`);
    } else {
        console.log("Producto no encontrado.");
    }
}

// Función para eliminar productos del carrito
function eliminarDelCarrito(nombreProducto) {
    carrito = carrito.filter(p => p.nombre !== nombreProducto);
    console.log(`${nombreProducto} eliminado del carrito.`);
}

// Función para calcular el total del carrito
function calcularTotal() {
    return carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);
}

// Función para listar todos los productos disponibles
function listarProductos() {
    console.log("Productos disponibles:");
    productos.forEach(producto => {
        console.log(`${producto.nombre} - ${producto.tipo} - $${producto.precio}`);
    });
}

// Función para listar los productos en el carrito
function listarCarrito() {
    if (carrito.length === 0) {
        console.log("El carrito está vacío.");
    } else {
        console.log("Productos en el carrito:");
        carrito.forEach(producto => {
            console.log(`${producto.nombre} - $${producto.precio}`);
        });
    }
}

// Ejemplo de uso
listarProductos();
agregarAlCarrito("Chocolate");
agregarAlCarrito("Empanada");
listarCarrito();
console.log("Total a pagar: $" + calcularTotal());
eliminarDelCarrito("Chocolate");
listarCarrito();
console.log("Total a pagar después de eliminar Chocolate: $" + calcularTotal());
