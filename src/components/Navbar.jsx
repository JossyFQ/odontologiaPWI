import React from 'react';
import './Navbar.css'; // Importamos los estilos CSS específicos para Navbar

const Navbar = () => {
    return (
        <div className="navbar">
            <a href="home.html" className="nav-item" id="inicio">Inicio</a>
            <a href="registroCirugia/menuCirugia.html" className="nav-item" id="registroCirugia">Registro Cirugia</a>
            <a href="registroTratamiento/registroTratamiento.html" className="nav-item" id="registroTratamiento">Registro tratamiento</a>
            <a href="visualizarPaciente/visualizarPaciente.html" className="nav-item" id="visualizarPaciente">Visualizar paciente</a>
            <div className="dropdown">
                <button className="dropbtn">Menu &#9776; <i className="fa fa-caret-down"></i></button>
                <div className="dropdown-content">
                <a href="perfil/perfil.html">Perfil</a>
                <a href="inicioSesion/inicioSesion.html">Cerrar sesión</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
