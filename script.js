let platos = [];
let carrito = [];

// Mostrar formulario de agregar plato
function mostrarFormulario() {
    document.getElementById("formulario").style.display = "block";
}

// Agregar plato al menú (Administrador)
function agregarPlato() {
    let nombre = document.getElementById("nombrePlato").value;
    let categoria = document.getElementById("categoriaPlato").value;
    let precio = document.getElementById("precioPlato").value;

    if (nombre && precio) {
        let plato = { nombre, categoria, precio };
        platos.push(plato);
        actualizarListaPlatos();
        document.getElementById("formulario").reset();
    } else {
        alert("Completa todos los campos");
    }
}

// Mostrar el menú en el Administrador
function actualizarListaPlatos() {
    let lista = document.getElementById("listaPlatos");
    lista.innerHTML = "";
    platos.forEach(plato => {
        let li = document.createElement("li");
        li.innerText = `${plato.nombre} - $${plato.precio} (${plato.categoria})`;
        lista.appendChild(li);
    });
}

// Mostrar menú en Cliente
function mostrarMenuCliente() {
    document.getElementById("sopas").innerHTML = "";
    document.getElementById("platosFuertes").innerHTML = "";
    document.getElementById("jugos").innerHTML = "";

    platos.forEach(plato => {
        let li = document.createElement("li");
        li.innerHTML = `${plato.nombre} - $${plato.precio} 
                        <button onclick="agregarAlCarrito('${plato.nombre}', ${plato.precio})">Agregar</button>`;

        if (plato.categoria === "Sopas") {
            document.getElementById("sopas").appendChild(li);
        } else if (plato.categoria === "Platos fuertes") {
            document.getElementById("platosFuertes").appendChild(li);
        } else {
            document.getElementById("jugos").appendChild(li);
        }
    });
}

// Agregar plato al carrito (Cliente)
function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    actualizarCarrito();
}

// Actualizar carrito de compras
function actualizarCarrito() {
    let lista = document.getElementById("carrito");
    let total = 0;
    lista.innerHTML = "";
    carrito.forEach(item => {
        let li = document.createElement("li");
        li.innerText = `${item.nombre} - $${item.precio}`;
        lista.appendChild(li);
        total += item.precio;
    });
    document.getElementById("total").innerText = total;
}

// Confirmar pedido
function confirmarPedido() {
    alert("Pedido confirmado. ¡Gracias por tu compra!");
    carrito = [];
    actualizarCarrito();
}
