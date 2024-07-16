function validarFormulario() {
    var id = document.getElementById('id').value.trim();
    var nombre = document.getElementById('nombre').value.trim();
    var edad = document.getElementById('edad').value.trim();
    var motivoConsulta = document.getElementById('motivoConsulta').value.trim();
    var tipoDeProblema = document.getElementById('tipoDeProblema').value.trim();
    var antecedentePersonales = document.getElementById('antecedentePersonales').value.trim();
    var antecedenteMedico = document.getElementById('antecedenteMedico').value.trim();
    //var eEstomatognatico = document.getElementById('eEstomatognatico').value.trim();
    //signos vitales
    // Obtener los valores de los campos y limpiar espacios en blanco
    var presionArterial = document.getElementById('pArterial').value.trim();
    var frecuenciaCardiaca = document.getElementById('fCardiaca').value.trim();
    var temperaturaCorporal = document.getElementById('tCorporal').value.trim();
    var frecuenciaRespiratoria = document.getElementById('fRespiratoria').value.trim();
    // Función para validar cada signo vital
    function validarSignoVital(nombre, valor, rangoNormal) {
        var valorNumerico = parseFloat(valor); // Convertir a número flotante
          // Verificar si es un número válido y está dentro del rango normal
        if (!isNaN(valorNumerico) && valorNumerico >= rangoNormal.min && valorNumerico <= rangoNormal.max) {
        return { nombre: nombre, valor: valorNumerico };
        } else {
        return null; // Valor no válido o fuera del rango
        }
    }
    // Definir los rangos normales para cada signo vital (ejemplo)
    var rangosNormales = {
        presionArterial: { min: 70, max: 190 }, // Ejemplo de rango normal para presión arterial sistólica
        frecuenciaCardiaca: { min: 40, max: 150 }, // Ejemplo de rango normal para frecuencia cardiaca
        temperaturaCorporal: { min: 35, max: 42 }, // Ejemplo de rango normal para temperatura corporal en °C
        frecuenciaRespiratoria: { min: 10, max: 30 } // Ejemplo de rango normal para frecuencia respiratoria
    };
    // Validar cada signo vital
    var signosVitalesValidados = [];
    // Validar presión arterial
    var presionArterialValidada = validarSignoVital('Presión Arterial', presionArterial, rangosNormales.presionArterial);
    if (presionArterialValidada) {
        signosVitalesValidados.push(presionArterialValidada);
    }
    // Validar frecuencia cardiaca
    var frecuenciaCardiacaValidada = validarSignoVital('Frecuencia Cardíaca', frecuenciaCardiaca, rangosNormales.frecuenciaCardiaca);
    if (frecuenciaCardiacaValidada) {
        signosVitalesValidados.push(frecuenciaCardiacaValidada);
    }
    // Validar temperatura corporal
    var temperaturaCorporalValidada = validarSignoVital('Temperatura Corporal', temperaturaCorporal, rangosNormales.temperaturaCorporal);
    if (temperaturaCorporalValidada) {
        signosVitalesValidados.push(temperaturaCorporalValidada);
    }
    // Validar frecuencia respiratoria
    var frecuenciaRespiratoriaValidada = validarSignoVital('Frecuencia Respiratoria', frecuenciaRespiratoria, rangosNormales.frecuenciaRespiratoria);
    if (frecuenciaRespiratoriaValidada) {
        signosVitalesValidados.push(frecuenciaRespiratoriaValidada);
    }//*/
    // Expresiones regulares para validar cada campo
    var idRegex =  /^\d{9,17}$/;
    var nombreRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,30}$/;
    var edadRegex = /^(0[8-9]|1[0-9]|100)$/;
    var edadRegex = /^(0[8-9]|[1-9][0-9]?|100)$/;
    var motivoConsultaRegex = /^(?:[a-zA-Z0-9\s,'-]+|[\s]*)$/;
    var tipoDeProblemaRegex = /^(?:[a-zA-Z0-9\s,'-]+|[\s]*)$/;
    var antecedentePersonalesRegex = /^(?:[a-zA-Z0-9\s,'-]+|[\s]*)$/;
    var antecedenteMedicoRegex = /^(?:[a-zA-Z0-9\s,'-]+|[\s]*)$/;
    //var eEstomatognaticoRegex = /^(?:[a-zA-Z0-9\s,'-]+|[\s]*)$/;
    //Validación del género //Obtención del valor del <select>
    var generoSeleccion = document.getElementById('genero').value.trim();
    if (generoSeleccion === '' || (generoSeleccion !== 'masculino' && generoSeleccion !== 'femenino')) {
        alert("Por favor, seleccione el género del paciente.");
        return false;
    }
    // Validar cada campo con su expresión regular correspondiente
    if (!idRegex.test(id)) {
        alert("Por favor ingrese la cedula correctamente.");
        return false;
    }
    if (!nombreRegex.test(nombre)) {
        alert("Por favor ingrese el Nombre completo del paciente.");
        return false;
    }
    if (!edadRegex.test(edad)) {
        alert("Por favor ingrese la edad correspondiente del paciente.");
        return false;
    }
    if (!motivoConsultaRegex.test(motivoConsulta)) {
        alert("Por favor escriba el motivo de la consulta al paciente.");
        return false;
    }
    if (!tipoDeProblemaRegex.test(tipoDeProblema)) {
        alert("Por favor escriba que tipo de enfermedad tiene el paciente.");
        return false;
    }
    if (!antecedentePersonalesRegex.test(antecedentePersonales)) {
        alert("Por favor anote los antecedentes personales del paciente.");
        return false;
    }
    if (!antecedenteMedicoRegex.test(antecedenteMedico)) {
        //alert("Por favor ingrese una contraseña valida.");
        alert("Por favor anote los antecedentes medicos del paciente.");
        return false;
    }
    /*if (!eEstomatognaticoRegex.test(eEstomatognatico)) {
        alert("Por favor compruebe la validación de la contraseña.");
        return false;
    }*/
    // Si pasa todas las validaciones, el formulario se puede enviar
    return true;
}

function guardarDatos() {
    // Aquí puedes agregar el código para guardar los datos del paciente
    // Por ejemplo, podrías hacer una llamada a una API, enviar una solicitud AJAX, etc.
    console.log('Guardando datos del paciente...');
    // Ejemplo de llamada a una API utilizando fetch (requiere configuración y endpoint válido)
    /*
    fetch('https://ejemplo-api.com/guardarDatos', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        // Aquí puedes enviar datos del paciente si es necesario
        }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Datos guardados correctamente:', data);
      // Aquí puedes manejar la respuesta de la API o cualquier lógica adicional
    })
    .catch(error => {
        console.error('Error al guardar datos:', error);
      // Aquí puedes manejar errores si ocurren durante la solicitud
    });
    */
    // En este ejemplo, simplemente mostramos un mensaje en la consola
    // Para simular que se está guardando la información del paciente
}
