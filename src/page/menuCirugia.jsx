import React from 'react';
import Navbar from '../components/Navbar';

const MenuCirugia = () => {
    const redirectTo = (path) => {
        window.location.href = path;
    };

    return (
        <div>
        <Navbar />
            <div className="botones-container">
                <button className="cuadrado" type="button" onClick={() => redirectTo('./datosPaciente.jsx')}>
                Datos del Paciente</button>
                <button className="cuadrado" type="button" onClick={() => redirectTo('./odontograma.jsx')}>
                Odontograma</button>
                <button className="cuadrado" type="button" onClick={() => redirectTo('./indicadorSaludBucal.jsx')}>
                Indicadores de salud bucal</button>
                <button className="cuadrado" type="button" onClick={() => redirectTo('./diagnostico.jsx')}>
                Diagnóstico</button>
            </div>
        </div>
    );
};

export default MenuCirugia;
