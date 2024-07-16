function validarFormulario() {
    var pDiagnostico = document.getElementById('pDiagnostico').value.trim();
    var diagnostico = document.getElementById('diagnostico').value.trim();
    // Expresiones regulares para validar cada campo
    var pDiagnosticoRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ0\d]{2,900}$/;
    var diagnosticoRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ0\d\s,'-]{2,900}$/;
    // Validar cada campo con su expresión regular correspondiente
    if (!pDiagnosticoRegex.test(pDiagnostico)) { 
        alert("Por favor escriba el plan del diagnostico.");
        return false;
    }
    if (!diagnosticoRegex.test(diagnostico)) {
        //alert("Por favor ingrese una contraseña valida.");
        alert("Por favor escriba el diagnostico a tratar.");
        return false;
    }
    // Si pasa todas las validaciones, el formulario se puede enviar
    return true;
}
