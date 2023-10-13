
document.getElementById("olvidasteContrasena").addEventListener("click", function () {
    alert("¡Olvidaste tu contraseña! Busca en tus apuntes para recuperarla porque esta herramienta aún no funciona. ☺☺☺");
});

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var password = document.getElementById("password").value;

    // Expresión regular para validar el formato de correo electrónico
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (email === "" || password === "") {
        alert("Por favor, completa todos los campos.");
    }else if (!emailPattern.test(email)) {
        alert("El formato del correo electrónico no es válido.");
    
    }else if (password.length < 8) {
        alert("La contraseña debe tener al menos 8 caracteres.");
    } else {
        window.location.href = "homeCarrito.html";
    }
});





