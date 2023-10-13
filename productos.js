
        // Estructura de datos de los productos (puedes agregar más productos)
        const productos = [
            {
                nombre: "desde productos",
                descripcion: "blusa color azul",
                precio: "$10.000",
                imagen: "./images/blusa.jpg"
            },
            {
                nombre: "pantalon jean",
                descripcion: "pantalon dama",
                precio: "$12.00",
                imagen: "./images/jean2.jpg"
            },
            {
                nombre: "chequeta jean",
                descripcion: "chaqueta hombre",
                precio: "$18.000",
                imagen: "./images/chaqueta.jpg"
            },
            {
                nombre: "falda jean",
                descripcion: "falda dama",
                precio: "$14.500",
                imagen: "./images/falda.jpg"
            },
            {
                nombre: "chequeta jean",
                descripcion: "Dchaqueta hombre",
                precio: "$20.000",
                imagen: "./images/bolso.jpg"
            },
            
        ];

        // Función para cargar los productos en la página
        
        function cargarProductos() {
            const productosContainer = document.getElementById("productos-container");
        
            // Itera sobre la estructura de datos y crea elementos HTML para cada producto
            productos.forEach(producto => {
                const productoHTML = `
                    <div class="col-md-3">
                        <div class="card">
                            <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                            <div class="card-body">
                                <h5 class="card-title">${producto.nombre}</h5>
                                <p class="card-text">${producto.descripcion}</p>
                                <p class="card-text">${producto.precio}</p>
                                <button class="btn btn-success" onclick="agregarAlCarrito('${producto.nombre}', '${producto.precio}')">Agregar al carrito</button>
                            </div>
                        </div>
                    </div>
                `;
                productosContainer.innerHTML += productoHTML;
            });
        }
        
/************************************************************* */
function agregarAlCarrito(nombre, precio) {
    
    alert(`Agregaste "${nombre}" al carrito por ${precio}`);
}
       
  

/************************************************************ */
        // Cargar los productos cuando la página se cargue
        window.addEventListener("load", cargarProductos);
    