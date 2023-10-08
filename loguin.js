

// Función para validar campos de entrada
function validateInput(inputElement, validacionForm, mensajeError) {
    inputElement.addEventListener("input", function() {
        if (validacionForm.test(inputElement.value)) {
            inputElement.setCustomValidity("");
        } else {
            inputElement.setCustomValidity(mensajeError);
        }
    });
}

// Obtener elementos de entrada
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");



// Definir expresiones regulares y mensajes de error
let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let emailErrorMessage = "Por favor, ingrese una dirección de correo electrónico válida.";

let passwordPattern = /.{8,}/;
let passwordErrorMessage = "La contraseña debe tener al menos 8 caracteres.";

// Validar campos de entrada
validateInput(emailInput, emailPattern, emailErrorMessage);
validateInput(passwordInput, passwordPattern, passwordErrorMessage);

/********************************* */


const apellidosInput = document.getElementById("apellidos");
    const apellidosError = document.getElementById("apellidos-error");

    apellidosInput.addEventListener("input", function () {
        const value = apellidosInput.value.trim();
        const regex = /^[A-Za-z\s]+$/; // Expresión regular para letras y espacios

        if (regex.test(value)) {
            apellidosError.textContent = ""; // Campo válido
        } else {
            apellidosError.textContent = "Solo se permiten letras y espacios en los apellidos";
        }
    });