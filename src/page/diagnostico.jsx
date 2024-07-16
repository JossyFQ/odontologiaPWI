    import React, { useState } from 'react';
    //import { db } from './firebase'; // Importa la instancia de Firestore

    const Diagnostico = () => {
        // Estados para los campos del formulario
        const [id, setId] = useState('');
        const [pDiagnostico, setPDiagnostico] = useState('');
        const [diagnostico, setDiagnostico] = useState('');
        // Expresiones regulares para validar cada campo
        const idRegex = /^\d{9,17}$/;
        const pDiagnosticoRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9\s,'-]{2,900}$/;
        const diagnosticoRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9\s,'-]{2,900}$/;
        // Función para validar el formulario
        const validarFormulario = () => {
            if (!idRegex.test(id.trim())) {
                alert("Por favor ingrese la cedula correctamente.");
                return false;
            }
            if (!pDiagnosticoRegex.test(pDiagnostico.trim())) {
                alert("Por favor escriba el plan del diagnostico.");
                return false;
            }
            if (!diagnosticoRegex.test(diagnostico.trim())) {
                alert("Por favor escriba el diagnostico a tratar.");
                return false;
            }
            // Si pasa todas las validaciones, el formulario se puede enviar
            return true;
        };
        // Función para manejar el envío del formulario
        const guardarDatos = async (event) => {
            event.preventDefault();
            if (validarFormulario()) {
                /*try {
                    const docRef = await db.collection('diagnosticos').add({
                        id: id,
                        planDiagnostico: pDiagnostico,
                        diagnostico: diagnostico
                    });
                    console.log("Documento agregado con ID: ", docRef.id);
                    // Limpiamos los campos después de guardar
                    setId('');
                    setPDiagnostico('');
                    setDiagnostico('');
                    alert("Datos guardados correctamente en Firebase!");
                } catch (error) {
                    console.error("Error al agregar documento: ", error);
                    alert("Hubo un error al guardar los datos. Por favor intenta de nuevo.");
                }*/
            }
        };
        return (
            <div>
                <form id="datosPaciente" onSubmit={guardarDatos}>
                    <h1>Registro Clínico</h1>
                    <h2>Diagnóstico</h2>
                    <label htmlFor="id">Cédula ID del paciente:</label>
                    <input type="number" id="id" name="id" value={id} onChange={(e) => setId(e.target.value)} 
                        required placeholder="Identificación del paciente"/>
                    <label htmlFor="pDiagnostico">Planes de diagnóstico, terapéutico y educacional:</label>
                    <textarea id="pDiagnostico" name="pDiagnostico" value={pDiagnostico} onChange={(e) => setPDiagnostico(e.target.value)} 
                        required placeholder="Plan del diagnóstico" rows="4" cols="50"/>
                    <label htmlFor="diagnostico">Diagnóstico:</label>
                    <textarea id="diagnostico" name="diagnostico" value={diagnostico} onChange={(e) => setDiagnostico(e.target.value)} 
                        required placeholder="Diagnóstico" rows="4" cols="50"/>
                    <button type="submit">Guardar Diagnóstico</button>
                </form>
            </div>
        );
    };

    export default Diagnostico;
