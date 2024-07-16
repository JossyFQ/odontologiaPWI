import React, { useState } from 'react';
//import { firestore } from './firebase'; // Importa firestore desde tu archivo firebase.js

const IndicadorSaludBucal = () => {
    const [formData, setFormData] = useState({
        id: '',
        placa: '',
        calculo: '',
        gingivitis: '',
        periodontitis: '',
        oclusion: '',
        fluorosis: '',
        c: '',
        p: '',
        o: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
        ...formData,
        [name]: value
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validarFormulario()) {
            /*try {
                const docRef = await firestore.collection('indicadoresSaludBucal').add(formData);
                console.log('Documento guardado con ID: ', docRef.id);
                alert('Datos guardados exitosamente');
                // Reinicia el estado del formulario después de guardar los datos
                setFormData({
                id: '',
                placa: '',
                calculo: '',
                gingivitis: '',
                periodontitis: '',
                oclusion: '',
                fluorosis: '',
                c: '',
                p: '',
                o: ''
                });
            } catch (error) {
                console.error('Error al guardar los datos: ', error);
                alert('Hubo un error al guardar los datos. Por favor, inténtelo de nuevo.');
            }*/
        }
    };
    const validarFormulario = () => {
        const {
        id,
        placa,
        calculo,
        gingivitis,
        c,
        p,
        o
        } = formData;

        const idRegex = /^\d{9,17}$/;
        const numberRegex = /^(0|[1-9]|1\d|20|3[0-2])$/;

        if (!idRegex.test(id)) {
        alert('Por favor ingrese la cedula correctamente.');
        return false;
        }
        if (!numberRegex.test(placa)) {
        alert('Por favor ingrese la cantidad de placa.');
        return false;
        }
        if (!numberRegex.test(calculo)) {
        alert('Por favor ingrese la cantidad de calculo.');
        return false;
        }
        if (!numberRegex.test(gingivitis)) {
        alert('Por favor ingrese la cantidad de gingivitis.');
        return false;
        }
        if (!numberRegex.test(c)) {
        alert('Por favor ingrese la cantidad de dientes afectados por caries.');
        return false;
        }
        if (!numberRegex.test(p)) {
        alert('Por favor ingrese la cantidad de dientes perdidos debido a caries.');
        return false;
        }
        if (!numberRegex.test(o)) {
        alert('Por favor ingrese la cantidad de dientes con restauraciones.');
        return false;
        }

        return true;
    };
    return (
        <div className="indicador-salud-bucal">
            <form onSubmit={handleSubmit}>
                <h1>Registro Clínico</h1>
                <h2>Indicadores de salud bucal</h2>
                <label htmlFor="id">Cedula ID del paciente:
                <input type="number" id="id" name="id" value={formData.id} onChange={handleChange} 
                    required placeholder="Identificacion del paciente"/>
                </label>
                <h4>Higiene oral:</h4>
                <label htmlFor="placa">Placa:
                <input type="number" id="placa" name="placa" value={formData.placa} onChange={handleChange}
                    required/>
                </label>
                <label htmlFor="calculo">Calculo:
                <input type="number" id="calculo" name="calculo" value={formData.calculo} onChange={handleChange}
                    required/>
                </label>
                <label htmlFor="gingivitis">Gingivitis:
                <input type="number" id="gingivitis" name="gingivitis" value={formData.gingivitis} onChange={handleChange}
                    required/>
                </label>
                <h4>Enfermedad Periodontal:</h4>
                <label>
                <input type="radio" name="periodontitis" value="LEVE" onChange={handleChange}/>LEVE
                </label>
                <label>
                <input type="radio" name="periodontitis" value="MODERADA" onChange={handleChange}/>
                MODERADA
                </label>
                <label>
                <input type="radio" name="periodontitis" value="SEVERA" onChange={handleChange}/>
                SEVERA
                </label>
                <h4>Mal oclusión:</h4>
                <label>
                <input type="radio" name="oclusion" value="ANGLE I" onChange={handleChange}/>
                ANGLE I
                </label>
                <label>
                <input type="radio" name="oclusion" value="ANGLE II" onChange={handleChange}/>
                ANGLE II
                </label>
                <label>
                <input type="radio" name="oclusion" value="ANGLE III" onChange={handleChange}/>
                ANGLE III
                </label>
                <h4>Flúorosis:</h4>
                <label>
                <input type="radio" name="fluorosis" value="LEVE" onChange={handleChange}/>
                LEVE
                </label>
                <label>
                <input type="radio" name="fluorosis" value="MODERADA" onChange={handleChange}/>
                MODERADA
                </label>
                <label>
                <input type="radio" name="fluorosis" value="SEVERA" onChange={handleChange}/>
                SEVERA
                </label>
                <h4>Índice de CPO-ceo:</h4>
                <label htmlFor="c">Número de dientes afectados por caries (C):
                <input type="number" id="c" name="c" value={formData.c} onChange={handleChange}/>
                </label>
                <label htmlFor="p">Número de dientes perdidos debido a caries (P):
                <input type="number" id="p" name="p" value={formData.p} onChange={handleChange}/>
                </label>
                <label htmlFor="o">Número de dientes con restauraciones (O):
                <input type="number" id="o" name="o" value={formData.o} onChange={handleChange}/>
                </label>
                <button type="submit">Guardar salud bucal</button>
            </form>
        </div>
    );
};

export default IndicadorSaludBucal;
