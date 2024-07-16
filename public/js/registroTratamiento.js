function guardar() {

    var nombre = document.getElementById("nombre").value;
    var procedimientos = document.getElementById("procedimientos").value;
    var diagnostico = document.getElementById("diagnostico").value;
    var profesional = document.getElementById("profesional").value;
    var codigoPatologia = document.getElementById('codigoPatologia').value;
    var codigoTratamiento = document.getElementById("codigoTratamiento").value;
    var protocolo = document.getElementById("protocolo").value;
    var fecha = document.getElementById("fecha").value;

    // Validar que todos los campos estén completos
    if (nombre.trim() === '' || procedimientos.trim() === '' || diagnostico.trim() === '' || profesional.trim() === '' || codigoPatologia.trim() === '' || codigoTratamiento.trim() === '' || protocolo.trim() === '' || fecha.trim() === '') {
        alert("Por favor complete todos los campos.");
        return false;
    }

    // En este ejemplo, simplemente mostramos un mensaje de éxito
    alert("Datos guardados");
    return true;

}