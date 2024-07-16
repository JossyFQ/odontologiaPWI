function validarFormulario() {
    var placa = document.getElementById('placa').value.trim();
    var calculo = document.getElementById('calculo').value.trim();
    var gingivitis = document.getElementById('gingivitis').value.trim();
    var c = document.getElementById('c').value.trim();
    var p = document.getElementById('p').value.trim();
    var o = document.getElementById('o').value.trim();
    // Expresiones regulares para validar cada campo
    var placaRegex = /^(0|[1-9]|1\d|20|3[0-2])$/;
    var calculoRegex = /^(0|[1-9]|1\d|20|3[0-2])$/;
    var gingivitisRegex = /^(0|[1-9]|1\d|20|3[0-2])$/;
    var cRegex = /^(0|[1-9]|1\d|20|3[0-2])$/;
    var pRegex = /^(0|[1-9]|1\d|20|3[0-2])$/;
    var oRegex = /^(0|[1-9]|1\d|20|3[0-2])$/;
    // Validar que al menos un checkbox de cada grupo esté marcado
    var periodontalChecked = false;
    var oclusionChecked = false;
    var fluorosisChecked = false;
    // Verificar si hay algún checkbox
    var checkboxesPeriodontal = document.querySelectorAll('.Periodontal');
    checkboxesPeriodontal.forEach((checkbox) => {
        if (checkbox.checked) {
            periodontalChecked = true;
        }
    });
    var checkboxesOclusion = document.querySelectorAll('.Oclusion');
    checkboxesOclusion.forEach((checkbox) => {
        if (checkbox.checked) {
            oclusionChecked = true;
        }
    });
    var checkboxesFluorosis = document.querySelectorAll('.Fluor');
    checkboxesFluorosis.forEach((checkbox) => {
        if (checkbox.checked) {
            fluorosisChecked = true;
        }
    });
    // Si no está marcado al menos uno de cada grupo, mostrar alerta y no enviar el formulario
    if (!periodontalChecked) {
        alert("Por favor no se olvide de seleccionar la Enfermedad Periodontal.");
        return false;
    }
    if (!oclusionChecked) {
        alert("Por favor no se olvide de seleccionar la Mal Oclusión.");
        return false;
    }
    if (!fluorosisChecked) {
        alert("Por favor no se olvide de seleccionar el Fluorosis.");
        return false;
    }
    // Validar cada campo con su expresión regular correspondiente
    if (!placaRegex.test(placa)) {
        alert("Por favor ingrese la cantidad de placa si no la tiene .");
        return false;
    }
    if (!calculoRegex.test(calculo)) {
        alert("Por favor ingrese la cantidad de calculo si es que la tiene.");
        return false;
    }
    if (!gingivitisRegex.test(gingivitis)) {
        alert("Por favor ingrese la cantidad de gingivitis si es que la tiene.");
        return false;
    }
    if (!cRegex.test(c)) {
        alert("Por favor ingrese la cantidad de dientes afectados por caries si es que la tiene.");
        return false;
    }
    if (!pRegex.test(p)) {
        alert("Por favor ingrese la cantidad de dientes perdidos debido a caries si es que la tiene.");
        return false;
    }
    if (!oRegex.test(o)) {
        alert("Por favor ingrese la cantidad de dientes restaurados si es que la tiene.");
        return false;
    }
    // Si pasa todas las validaciones, el formulario se puede enviar
    return true;
}

//Funciones para limitar la selección a un solo checkbox por grupo
function limitarSeleccionFluor(checkbox) {
    const checkboxes = document.querySelectorAll('.Fluor');
    checkboxes.forEach((cb) => {
        if (cb !== checkbox) {
            cb.checked = false;
        }
    });
}
function limitarSeleccionOclusion(checkbox) {
    const checkboxes = document.querySelectorAll('.Oclusion');
    checkboxes.forEach((cb) => {
        if (cb !== checkbox) {
            cb.checked = false;
        }
    });
}
function limitarSeleccionPeriodontal(checkbox) {
    const checkboxes = document.querySelectorAll('.Periodontal');
    checkboxes.forEach((cb) => {
        if (cb !== checkbox) {
            cb.checked = false;
        }
    });
}
