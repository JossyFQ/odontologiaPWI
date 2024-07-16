import React, { useState } from 'react';
//import firebase from '../firebase'; 
import Navbar from '../components/Navbar';

const RegistroTratamiento = () => {
    // Estados para almacenar los valores de los campos del formulario
    const [id, setId] = useState('');
    const [nombre, setNombre] = useState('');
    const [procedimientos, setProcedimientos] = useState('');
    const [diagnostico, setDiagnostico] = useState('');
    const [profesional, setProfesional] = useState('');
    const [codigoTratamiento, setCodigoTratamiento] = useState('');
    const [codigoPatologia, setCodigoPatologia] = useState('');
    const [protocolo, setProtocolo] = useState('');
    const [fecha, setFecha] = useState('');
    // Funciones para manejar cambios en los campos del formulario
    const handleIdChange = (event) => setId(event.target.value.trim());
    const handleNombreChange = (event) => setNombre(event.target.value.trim());
    const handleProcedimientosChange = (event) => setProcedimientos(event.target.value.trim());
    const handleDiagnosticoChange = (event) => setDiagnostico(event.target.value.trim());
    const handleProfesionalChange = (event) => setProfesional(event.target.value.trim());
    const handleCodigoTratamientoChange = (event) => setCodigoTratamiento(event.target.value.trim());
    const handleCodigoPatologiaChange = (event) => setCodigoPatologia(event.target.value.trim());
    const handleProtocoloChange = (event) => setProtocolo(event.target.value.trim());
    const handleFechaChange = (event) => setFecha(event.target.value.trim());
    // Expresiones regulares para validar cada campo
    const idRegex =  /^\d{9,17}$/;
    const nombreRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\d]{3,90}$/;
    const procedimientosRegex = /^[a-zA-Z0-9\s,'-]*$/;
    const diagnosticoRegex = /^[a-zA-Z0-9\s,'-]*$/;
    const profesionalRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\d]{3,90}$/;
    const codigoPatologiaRegex = /^[a-zA-Z0-9\s,'-]*$/;
    const codigoTratamientoRegex = /^[a-zA-Z0-9\s,'-]*$/;
    // Función para validar el formulario
    const guardar = () => {
        if (!idRegex.test(id)) {
            alert("Por favor ingrese la cedula del paciente.");
            return false;
        }
        if (!nombreRegex.test(nombre)) {
            alert("Por favor ingrese el nombre del paciente.");
            return false;
        }
        if (!procedimientosRegex.test(procedimientos)) {
            alert("Por favor ingrese el procedimiento.");
            return false;
        }
        if (!diagnosticoRegex.test(diagnostico)) {
            alert("Por favor ingrese el diagnostico.");
            return false;
        }
        if (!profesionalRegex.test(profesional)) {
            alert("Por favor ingrese su Nombre.");
            return false;
        }
        if (!codigoPatologiaRegex.test(codigoPatologia)) {
            alert("Por favor ingrese el codigo de la patologia.");
            return false;
        }
        if (!codigoTratamientoRegex.test(codigoTratamiento)) {
            alert("Por favor ingrese el codigo del tratamiento.");
            return false;
        }
        return true;
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        // Validar el formulario antes de enviar a Firebase
        if (!guardar()) {
            return;
        }
        // Validar que todos los campos estén completos
        if (id === '' || nombre === '' || procedimientos === '' || diagnostico === '' || profesional === '' || codigoTratamiento === '' || codigoPatologia === '' || protocolo === '' || fecha === '') {
            alert("Por favor complete todos los campos.");
            return;
        }
        // Aquí podrías realizar el envío de los datos a tu servicio de backend o base de datos
        // En este ejemplo, simplemente mostramos un mensaje de éxito
        // Guardar datos en Firebase Realtime Database
        /*firebase.database().ref('tratamientos').push({
            id,
            nombre,
            procedimientos,
            diagnostico,
            profesional,
            codigoTratamiento,
            protocolo,
            fecha
        }).then(() => {
            alert('Datos de tratamiento guardados exitosamente en Firebase');
            // Limpiar los campos del formulario después de registrar
            setId('');
            setNombre('');
            setProcedimientos('');
            setDiagnostico('');
            setProfesional('');
            setCodigoTratamiento('');
            setProtocolo('');
            setFecha('');
        }).catch((error) => {
            console.error('Error al guardar datos de tratamiento en Firebase: ', error);
            alert('Ocurrió un error al guardar datos de tratamiento en Firebase');
        });*/
    };
    return (
        <div className="container">
            <Navbar />
            <div className="header">
                <h1>Formulario de Tratamiento Dental</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="id">Cédula ID del paciente:</label>
                    <input type="number" id="id" name="id" value={id} onChange={handleIdChange} required />
                    <label htmlFor="nombre">Nombre del Paciente:</label>
                    <input type="text" id="nombre" name="nombre" value={nombre} onChange={handleNombreChange} required />
                    <label htmlFor="procedimientos">Procedimientos Necesarios:</label>
                    <textarea id="procedimientos" name="procedimientos" rows="4" value={procedimientos} onChange={handleProcedimientosChange} required />
                    <label htmlFor="diagnostico">Diagnóstico y/o complicaciones:</label>
                    <input type="text" id="diagnostico" name="diagnostico" value={diagnostico} onChange={handleDiagnosticoChange} required />
                    <label htmlFor="profesional">Nombre del Profesional:</label>
                    <input type="text" id="profesional" name="profesional" value={profesional} onChange={handleProfesionalChange} required />
                    <label htmlFor="codigoPatologia">Código de Patologia:</label>
                    <input type="text" id="codigoPatologia" name="codigoPatologia" value={codigoPatologia} onChange={handleCodigoPatologiaChange} required />
                    <label htmlFor="codigoTratamiento">Código de tratamiento:</label>
                    <input type="text" id="codigoTratamiento" name="codigoTratamiento" value={codigoTratamiento} onChange={handleCodigoTratamientoChange} required />
                    <label htmlFor="protocolo">Protocolo de Tratamiento:</label>
                    <textarea id="protocolo" name="protocolo" rows="4" value={protocolo} onChange={handleProtocoloChange} required />
                    <label htmlFor="fecha">Fecha de registro:</label>
                    <input type="date" id="fecha" name="fecha" value={fecha} onChange={handleFechaChange} required />
                    <br /><br />
                    <button type="submit">Guardar</button>
                </div>
            </form>
        </div>
    );
};

export default RegistroTratamiento;