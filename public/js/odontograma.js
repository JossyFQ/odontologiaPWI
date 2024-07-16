// JavaScript para resaltar los dientes según el tipo de enfermedad
const dientes = document.querySelectorAll('.diente');

dientes.forEach(diente => {
    const tipoEnfermedad = diente.innerText.split(' ')[1]; // Obtiene el tipo de enfermedad del texto del diente

    switch (tipoEnfermedad) {
        case '3i':
            diente.classList.add('rojo');
            break;
        case '2i':
            diente.classList.add('azul');
            break;
        case '1i':
            diente.classList.add('negro');
            break;
        // Agrega más casos según sea necesario
        default:
            break;
    }
});/*
function guardarDatos() {
    var id = document.getElementById('id').value.trim();
    // Expresiones regulares para validar cada campo
    var idRegex =  /^\d{9,17}$/;
    // Validar cada campo con su expresión regular correspondiente
    if (!idRegex.test(id)) {
        alert("Por favor ingrese la cedula correctamente.");
        return false;
    }
    // Si pasa todas las validaciones, el formulario se puede enviar
    return true;
}
*/