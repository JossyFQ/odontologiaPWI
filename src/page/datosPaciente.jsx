import React, { useState } from 'react';
//import firebase from './firebaseConfig'; // Importar la configuración de Firebase

const DatosPaciente = () => {
    // Estado para los datos del paciente
    const [paciente, setPaciente] = useState({
        id: '',
        nombre: '',
        edad: '',
        genero: '',
        motivoConsulta: '',
        tipoDeProblema: '',
        antecedentePersonales: '',
        antecedenteMedico: '',
        presionArterial: '',
        frecuenciaCardiaca: '',
        temperaturaCorporal: '',
        frecuenciaRespiratoria: ''
    });
    // Función para manejar cambios en los campos del formulario
    const handleChange = (event) => {
        const { name, value } = event.target;
        setPaciente({
            ...paciente,
            [name]: value
        });
    };
    // Función para validar el formulario
    const validarFormulario = () => {
        // Expresiones regulares para validar cada campo
        const idRegex = /^\d{9,17}$/;
        const nombreRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,90}$/;
        const edadRegex = /^(8|[9-9]|[1-9][0-9]|100)$/;
        const motivoConsultaRegex = /^(?:[a-zA-Z0-9\s,'-]+|[\s]*)$/;
        const tipoDeProblemaRegex = /^(?:[a-zA-Z0-9\s,'-]+|[\s]*)$/;
        const antecedentePersonalesRegex = /^(?:[a-zA-Z0-9\s,'-]+|[\s]*)$/;
        const antecedenteMedicoRegex = /^(?:[a-zA-Z0-9\s,'-]+|[\s]*)$/;
        // Validación de campos
        if (!idRegex.test(paciente.id)) {
            alert("Por favor ingrese la cédula correctamente.");
            return false;
        }
        if (!nombreRegex.test(paciente.nombre)) {
            alert("Por favor ingrese el Nombre completo del paciente.");
            return false;
        }
        if (!edadRegex.test(paciente.edad)) {
            alert("Por favor ingrese una edad válida.");
            return false;
        }
        if (!motivoConsultaRegex.test(paciente.motivoConsulta)) {
            alert("Por favor ingrese el motivo de la consulta.");
            return false;
        }
        if (!tipoDeProblemaRegex.test(paciente.tipoDeProblema)) {
            alert("Por favor ingrese el tipo de problema o enfermedad actual.");
            return false;
        }
        if (!antecedentePersonalesRegex.test(paciente.antecedentePersonales)) {
            alert("Por favor ingrese los antecedentes personales y familiares.");
            return false;
        }
        if (!antecedenteMedicoRegex.test(paciente.antecedenteMedico)) {
            alert("Por favor ingrese los antecedentes médicos.");
            return false;
        }
        // Validación de signos vitales
        if (isNaN(parseFloat(paciente.presionArterial))) {
            alert("Ingrese una presión arterial válida.");
            return false;
        }
        if (isNaN(parseFloat(paciente.frecuenciaCardiaca))) {
            alert("Ingrese una frecuencia cardíaca válida.");
            return false;
        }
        if (isNaN(parseFloat(paciente.temperaturaCorporal))) {
            alert("Ingrese una temperatura corporal válida.");
            return false;
        }
        if (isNaN(parseFloat(paciente.frecuenciaRespiratoria))) {
            alert("Ingrese una frecuencia respiratoria válida.");
            return false;
        }
        // Validación de rangos normales según la edad
        const edadNum = parseInt(paciente.edad, 10);
        const rangosNormales = {
            adultos: {
                presionArterial: { min: 90, max: 140 },
                frecuenciaCardiaca: { min: 60, max: 100 },
                temperaturaCorporal: { min: 36.1, max: 37.2 },
                frecuenciaRespiratoria: { min: 12, max: 20 }
            },
            niños: {
                presionArterial: { min: 80, max: 120 },
                frecuenciaCardiaca: { min: 60, max: 120 },
                temperaturaCorporal: { min: 36.5, max: 37.5 },
                frecuenciaRespiratoria: { min: 20, max: 30 }
            },
            adolescentes: {
                presionArterial: { min: 90, max: 120 },
                frecuenciaCardiaca: { min: 60, max: 100 },
                temperaturaCorporal: { min: 36.3, max: 37.2 },
                frecuenciaRespiratoria: { min: 12, max: 20 }
            }
        };
        if (edadNum >= 19) { // Adultos
            if (paciente.presionArterial < rangosNormales.adultos.presionArterial.min || paciente.presionArterial > rangosNormales.adultos.presionArterial.max) {
                alert("La presión arterial está fuera del rango normal para adultos.");
                return false;
            }
            if (paciente.frecuenciaCardiaca < rangosNormales.adultos.frecuenciaCardiaca.min || paciente.frecuenciaCardiaca > rangosNormales.adultos.frecuenciaCardiaca.max) {
                alert("La frecuencia cardíaca está fuera del rango normal para adultos.");
                return false;
            }
            if (paciente.temperaturaCorporal < rangosNormales.adultos.temperaturaCorporal.min || paciente.temperaturaCorporal > rangosNormales.adultos.temperaturaCorporal.max) {
                alert("La temperatura corporal está fuera del rango normal para adultos.");
                return false;
            }
            if (paciente.frecuenciaRespiratoria < rangosNormales.adultos.frecuenciaRespiratoria.min || paciente.frecuenciaRespiratoria > rangosNormales.adultos.frecuenciaRespiratoria.max) {
                alert("La frecuencia respiratoria está fuera del rango normal para adultos.");
                return false;
            }
        } else if (edadNum >= 16 && edadNum <= 18) { // Adolescentes
            if (paciente.presionArterial < rangosNormales.adolescentes.presionArterial.min || paciente.presionArterial > rangosNormales.adolescentes.presionArterial.max) {
                alert("La presión arterial está fuera del rango normal para adolescentes.");
                return false;
            }
            if (paciente.frecuenciaCardiaca < rangosNormales.adolescentes.frecuenciaCardiaca.min || paciente.frecuenciaCardiaca > rangosNormales.adolescentes.frecuenciaCardiaca.max) {
                alert("La frecuencia cardíaca está fuera del rango normal para adolescentes.");
                return false;
            }
            if (paciente.temperaturaCorporal < rangosNormales.adolescentes.temperaturaCorporal.min || paciente.temperaturaCorporal > rangosNormales.adolescentes.temperaturaCorporal.max) {
                alert("La temperatura corporal está fuera del rango normal para adolescentes.");
                return false;
            }
            if (paciente.frecuenciaRespiratoria < rangosNormales.adolescentes.frecuenciaRespiratoria.min || paciente.frecuenciaRespiratoria > rangosNormales.adolescentes.frecuenciaRespiratoria.max) {
                alert("La frecuencia respiratoria está fuera del rango normal para adolescentes.");
                return false;
            }
        } else { // Niños (menores de 16 años)
            if (paciente.presionArterial < rangosNormales.niños.presionArterial.min || paciente.presionArterial > rangosNormales.niños.presionArterial.max) {
                alert("La presión arterial está fuera del rango normal para niños.");
                return false;
            }
            if (paciente.frecuenciaCardiaca < rangosNormales.niños.frecuenciaCardiaca.min || paciente.frecuenciaCardiaca > rangosNormales.niños.frecuenciaCardiaca.max) {
                alert("La frecuencia cardíaca está fuera del rango normal para niños.");
                return false;
            }
            if (paciente.temperaturaCorporal < rangosNormales.niños.temperaturaCorporal.min || paciente.temperaturaCorporal > rangosNormales.niños.temperaturaCorporal.max) {
                alert("La temperatura corporal está fuera del rango normal para niños.");
                return false;
            }
            if (paciente.frecuenciaRespiratoria < rangosNormales.niños.frecuenciaRespiratoria.min || paciente.frecuenciaRespiratoria > rangosNormales.niños.frecuenciaRespiratoria.max) {
                alert("La frecuencia respiratoria está fuera del rango normal para niños.");
                return false;
            }
        }
        return true; // Formulario válido
    };
    // Función para guardar los datos del paciente
    const guardarDatosPaciente = () => {
        if (validarFormulario()) {
            // Aquí simularíamos el proceso de guardar los datos, por ejemplo, enviarlos a una API
        /*    const pacientesRef = firebase.database().ref('pacientes');
            pacientesRef.push(paciente)
                .then(() => {
                    alert("Datos del paciente guardados correctamente.");
                    // Limpia el formulario después de guardar
                    setPaciente({
                        id: '',
                        nombre: '',
                        edad: '',
                        genero: '',
                        motivoConsulta: '',
                        tipoDeProblema: '',
                        antecedentePersonales: '',
                        antecedenteMedico: '',
                        presionArterial: '',
                        frecuenciaCardiaca: '',
                        temperaturaCorporal: '',
                        frecuenciaRespiratoria: ''
                    });
                })
                .catch((error) => {
                    console.error("Error al guardar los datos del paciente:", error);
                    alert("Ocurrió un error al guardar los datos del paciente. Por favor, inténtalo de nuevo.");
                });*/
        }
    };
    return (
        <div className="datos-paciente-container">
            <h2>Formulario de Datos del Paciente</h2>
            <form  onClick={guardarDatosPaciente}>
                <div className="form-group">
                    <label>Cédula de Identidad:</label>
                    <input type="text" name="id" value={paciente.id} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Nombre Completo:</label>
                    <input type="text" name="nombre" value={paciente.nombre} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Edad:</label>
                    <input type="text" name="edad" value={paciente.edad} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Género:</label>
                    <select name="genero" value={paciente.genero} onChange={handleChange}>
                        <option value="">Seleccionar</option>
                        <option value="masculino">Masculino</option>
                        <option value="femenino">Femenino</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Motivo de Consulta:</label>
                    <textarea name="motivoConsulta" value={paciente.motivoConsulta} onChange={handleChange}></textarea>
                </div>
                <div className="form-group">
                    <label>Tipo de Problema o Enfermedad Actual:</label>
                    <textarea name="tipoDeProblema" value={paciente.tipoDeProblema} onChange={handleChange}></textarea>
                </div>
                <div className="form-group">
                    <label>Antecedentes Personales y Familiares:</label>
                    <textarea name="antecedentePersonales" value={paciente.antecedentePersonales} onChange={handleChange}></textarea>
                </div>
                <div className="form-group">
                    <label>Antecedentes Médicos:</label>
                    <textarea name="antecedenteMedico" value={paciente.antecedenteMedico} onChange={handleChange}></textarea>
                </div>
                <div className="form-group">
                    <label>Presión Arterial (mmHg):</label>
                    <input type="text" name="presionArterial" value={paciente.presionArterial} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Frecuencia Cardíaca (latidos por minuto):</label>
                    <input type="text" name="frecuenciaCardiaca" value={paciente.frecuenciaCardiaca} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Temperatura Corporal (°C):</label>
                    <input type="text" name="temperaturaCorporal" value={paciente.temperaturaCorporal} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Frecuencia Respiratoria (respiraciones por minuto):</label>
                    <input type="text" name="frecuenciaRespiratoria" value={paciente.frecuenciaRespiratoria} onChange={handleChange} />
                </div>
                <button type="button">Guardar Datos del Paciente</button>
            </form>
        </div>
    );
};

export default DatosPaciente;
