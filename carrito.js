

    // Datos del carrito )
    const cart = [
        { name: "Producto 1", price: 10.00, quantity: 1 },
        { name: "Producto 2", price: 15.00, quantity: 1 },
    ];

    function updateCart() {
        let cartTotal = 0;
        const cartTable = document.getElementById("cart-table");

        cart.forEach((product, index) => {
            const quantityElement = document.getElementById(`quantity-${index}`);
            const totalElement = document.getElementById(`total-${index}`);

            quantityElement.textContent = product.quantity;
            totalElement.textContent = `$${(product.price * product.quantity).toFixed(2)}`;

            cartTotal += product.price * product.quantity;
        });

        document.getElementById("cart-total").textContent = `Total: $${cartTotal.toFixed(2)}`;
    }

    function decrementQuantity(index) {
        if (cart[index].quantity > 1) {
            cart[index].quantity--;
            updateCart();
        }
    }

    function incrementQuantity(index) {
        cart[index].quantity++;
        updateCart();
    }

    function removeProduct(index) {
        // Eliminar la fila de la tabla correspondiente al producto
        const cartTable = document.getElementById("cart-table");
        cartTable.deleteRow(index + 1); // +1 para compensar el encabezado de la tabla
        cart.splice(index, 1); // Eliminar el producto del carrito
        updateCart();
    }

    function checkout() {
        // Aquí puedes implementar la lógica para finalizar la compra
        alert("Compra realizada con éxito.");

        location.reload()
    }

    /************************************************ */

    


    /**************************************************** */

    // Inicializar el carrito
    updateCart();
    
