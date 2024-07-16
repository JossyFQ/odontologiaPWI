function validarFormulario() {
    var username = document.getElementById('username').value.trim();
    var password = document.getElementById('password').value.trim();
    // Expresiones regulares para validar cada campo
    var usernameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ0\d]{3,30}$/; // Cedula ID de 8 a 10 dígitos
    var emailRegex = /^[a-zA-Z\d]+@(outlook|hotmail|gmail|live)\.(com|es|ec)$/i;// Formato de correo electrónico válido
    //var usernameRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{3,30}$/i;
    var passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z]).{5,100}$/;
    // Validar cada campo con su expresión regular correspondiente
    if (!usernameRegex.test(username) && !emailRegex.test(username)) { 
        alert("Por favor ingrese correctamente su Usuario o Correo electronico.");
        return false;
    }
    if (!passwordRegex.test(password)) {
        //alert("Por favor ingrese una contraseña valida.");
        alert("Por favor ingrese su contraseña.");
        return false;
    }
    alert("Inicio de sesión exitoso para el usuario: " + username);
    
    // Si pasa todas las validaciones, el formulario se puede enviar
    return true;
}