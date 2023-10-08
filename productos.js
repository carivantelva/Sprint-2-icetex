
        // Estructura de datos de los productos (puedes agregar más productos)
        const productos = [
            {
                nombre: "blusa",
                descripcion: "blusa color azul",
                precio: "$19.99",
                imagen: "./images/blusa.jpg"
            },
            {
                nombre: "chequeta jean",
                descripcion: "Dchaqueta hombre",
                precio: "$29.99",
                imagen: "./images/chaqueta.jpg"
            },
            {
                nombre: "chequeta jean",
                descripcion: "Dchaqueta hombre",
                precio: "$29.99",
                imagen: "./images/chaqueta.jpg"
            },
            {
                nombre: "chequeta jean",
                descripcion: "Dchaqueta hombre",
                precio: "$29.99",
                imagen: "./images/chaqueta.jpg"
            },
            {
                nombre: "chequeta jean",
                descripcion: "Dchaqueta hombre",
                precio: "$29.99",
                imagen: "./images/chaqueta.jpg"
            },
            // Agrega más productos aquí
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
                            </div>
                        </div>
                    </div>
                `;
                productosContainer.innerHTML += productoHTML;
            });
        }
/************************************************************* */

       
  

/************************************************************ */
        // Cargar los productos cuando la página se cargue
        window.addEventListener("load", cargarProductos);
    