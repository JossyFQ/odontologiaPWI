function validarFormulario() {
    var id = document.getElementById('id').value.trim();
    //var user = document.getElementById('user').value.trim();
    var nombre = document.getElementById('name').value.trim();
    var apellido = document.getElementById('seconame').value.trim();
    var email = document.getElementById('email').value.trim();
    var telefono = document.getElementById('telefono').value.trim();
    var ciudad = document.getElementById('ciudad').value.trim();
    var direccion = document.getElementById('direccion').value.trim();
    var password = document.getElementById('password').value.trim();
    var validarPassword = document.getElementById('validarPassword').value.trim();
    // Expresiones regulares para validar cada campo
    var idRegex =  /^\d{9,17}$/;
    //var userRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\d]{3,30}$/; // Cedula ID de 8 a 10 dígitos
    var apellidoRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,30}$/; // Solo letras y espacios para apellidos
    var nombreRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,30}$/; // Solo letras y espacios para nombres
    var ciudadRegex = /^[a-zA-Z0-9\s,'-]*$/;
    var direccionRegex = /^[a-zA-Z0-9\s,'-]*$/; // Letras, números, espacios y caracteres especiales para dirección
    var telefonoRegex = /^\d{7,10}$/; // Número de teléfono de 7 a 10 dígitos
    var emailRegex = /^[a-zA-Z\d]+@(outlook|hotmail|gmail|live|yahoo|gmx|mail|yandex)\.(com|es|ec|mx|co|uk|us|jp|br|net|edu|org|gov|info)$/i;// Formato de correo electrónico válido
    var passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z]).{5,100}$/;
    var validarPasswordRegex = /^(?=.*\d)(?=.*[a-zA-Z]).{5,100}$/;
    //Validación del género //Obtención del valor del <select>
    // Validar cada campo con su expresión regular correspondiente
    if (!idRegex.test(id)) {
        alert("Por favor ingrese su cédula.");
        return false;
    }
    /*if (!userRegex.test(user)) {
        alert("Por favor ingrese un Usuario valido.");
        return false;
    }//*/
    if (!apellidoRegex.test(apellido)) {
        alert("Por favor ingrese Apellido completo.");
        return false;
    }
    if (!nombreRegex.test(nombre)) {
        alert("Por favor ingrese Nombre completo.");
        return false;
    }
    var generoSeleccion = document.getElementById('gender').value.trim();
    if (generoSeleccion === '' || (generoSeleccion !== 'male' && generoSeleccion !== 'female')) {
        alert("Por favor, seleccione su género.");
        return false;
    }
    var eCivilSeleccion = document.getElementById('eCivil').value.trim();
    if (eCivilSeleccion === '' || (eCivilSeleccion !== 'soltero' && eCivilSeleccion !== 'casado' && eCivilSeleccion !== 'divorciado' && eCivilSeleccion !== 'viudo'  && eCivilSeleccion !== 'separado')) {
        alert("Por favor, seleccione su género.");
        return false;
    }
    if (!ciudadRegex.test(ciudad)) {
        alert("Por favor ingrese su Ciudad.");
        return false;
    }
    if (!direccionRegex.test(direccion)) {
        alert("Por favor ingrese una Dirección.");
        return false;
    }
    if (!telefonoRegex.test(telefono)) {
        alert("Por favor ingrese su numero de Teléfono.");
        return false;
    }
    if (!emailRegex.test(email)) {
        alert("Por favor ingrese un Correo electrónico valido.");
        return false;
    }
    if (!passwordRegex.test(password)) {
        //alert("Por favor ingrese una contraseña valida.");
        alert("La contraseña debe contener al menos un dígito y una letra, minimo a 5 caracteres.");
        return false;
    }
    if (!validarPasswordRegex.test(validarPassword)) {
        alert("Por favor ingrese la validación de la contraseña.");
        return false;
    }
    // Validar que las contraseñas sean iguales
    if (password !== validarPassword) {
        alert("Las contraseñas no coinciden. Por favor, inténtelo de nuevo.");
        return false;
    }
    // Si pasa todas las validaciones, el formulario se puede enviar
    return true;
}
