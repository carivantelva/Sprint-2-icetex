
    const carrito = document.querySelector('#carrito');
    const contenedorCarrito = document.querySelector('#lista-carrito tbody');
    
    const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
    const comprarCarritoBtn = document.querySelector('#comprarBtn');

    const listaArticulos = document.querySelector('#lista-articulos');

    let articulosCarrito = [];


    

    cargarEventListeners() 

    function cargarEventListeners() {
        // Cuando agregas una prenda presionando "Agregar al carrito"
        listaArticulos.addEventListener('click',agregarArticulo);

        //Elimina articulos del carrito
        carrito.addEventListener('click', eliminarArticulo);  
        
        //muestra los articulos del local Storage
        document.addEventListener('DOMContentLoaded', () => {
            articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];

            carritoHTML();

        });

        //vaciar el carrito
        vaciarCarritoBtn.addEventListener('click', () => {
            //console.log('vaciando carrito ....')
            articulosCarrito = [];//aqui reseteamos el arreglo

            limpiarHTML();//Eliminamos todo el HTML

            localStorage.removeItem('carrito');
        });


        //comprar carrito
       comprarCarritoBtn.addEventListener('click', () => {

        
           // console.log('comprando carrito ....')
          

           articulosCarrito = [];   
           window.alert("su compra se esta confirmando");        

            limpiarHTML();//Eliminamos todo el HTML

            localStorage.removeItem('carrito');
        });

        
    }

    // Funciones
    function agregarArticulo(e) {

        e.preventDefault(); //AQUI SE PREVIENE QUE SALTE HACIA ARRIBA

        if(e.target.classList.contains('agregar-carrito')){
            const articuloSeleccionado = e.target.parentElement.parentElement;
            leerDatosArticulo(articuloSeleccionado);
        }
        
    }

    //elimina un articulo del carrito
    function eliminarArticulo(e){
        if(e.target.classList.contains('borrar-articulo')){

       // console.log('desde eliminar articulo ....') para probar codigo eliminar articulo

       const articuloId = e.target.getAttribute('data-id');

       //Elimina dl arreglo de articulosCarrito por el data-id

       articulosCarrito = articulosCarrito.filter( articulo => articulo.id !== articuloId);

       carritoHTML();//interar sobre el carrito y mostrar su HTML

       };
    }
    

    //aqui lee el contenido del HTML al que le dimos click y extrae la informacion del articulo
    function leerDatosArticulo(articulo){
        //console.log(articulo);

        //creamos un objeto con el contenido del articulo actual

        const infoArticulo = {
            imagen: articulo.querySelector('img').src,
            titulo: articulo.querySelector('h4').textContent,
            precio: articulo.querySelector('.precio span').textContent,
            id:articulo.querySelector('a').getAttribute('data-id'),
            cantidad: 1
        }
        /************************************************************************ */

       

        /************************************************************************** */



        //revisa si un articulo ya existe en el carrito
        const existe = articulosCarrito.some(articulo => articulo.id === infoArticulo.id);

        //console.log(existe); //para verificar codigo false o true

        if(existe){
            //actualizamos la cantidad
            const articulos = articulosCarrito.map(articulo => {
                if (articulo.id === infoArticulo.id){
                    articulo.cantidad++;
                    return articulo; //este retorna el objeto actualizado
                }else{
                    return articulo; // retorna los objetos no duplicados
                }
            }) 

            articulosCarrito = [...articulos];
            
        }else{articulosCarrito = [...articulosCarrito, infoArticulo];
            //agregamos el articulo al carrito
        }

        console.log(infoArticulo) //para verificar la creaccion del objeto

        //agrego elementos al arreglo de carrito
       // articulosCarrito = [...articulosCarrito, infoArticulo]; //aqui tomo una copia del arreglo carrito
       // console.log(articulosCarrito);

        carritoHTML();
    }

    //muestra el carrito de compra en el HTML
    function carritoHTML(){

        //limpiar HTML
        limpiarHTML();

        //recorre el carrito y genera el html
        articulosCarrito.forEach (articulo => {
            //console.log(articulo);

            const row = document.createElement('tr');
            row.innerHTML = `
            <td> <img src="${articulo.imagen}" width="90" </td>
            <td>${articulo.titulo}</td>
            <td>${articulo.precio}</td>
            <td>${articulo.cantidad}</td>
            <td>
            <a href="#" class="borrar-articulo" data-id="${articulo.id}"> x </a>
            </td>
            
            `;
            //agrega el html del carrito en el tbody
            contenedorCarrito.appendChild(row);
        });

        //agregar el carrito al storage
        sincronizarStorage();
    }

    function sincronizarStorage(){
        localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
    }


    //elimina los articulos del tbody
    function limpiarHTML(){

        //forma lenta de limpiar html       
       // contenedorCarrito.innerHTML = '';
       while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
       }
    }

        


    
    

