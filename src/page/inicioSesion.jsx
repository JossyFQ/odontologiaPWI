import React, { useState } from 'react';
//import firebase from '../firebase';
//import { Link } from 'react-router-dom';

const InicioSesion = () => {
    // Estados para almacenar los valores de los campos del formulario
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // Funciones para manejar cambios en los campos del formulario
    const handleUsernameChange = (event) => setUsername(event.target.value.trim());
    const handlePasswordChange = (event) => setPassword(event.target.value.trim());
    // Expresiones regulares para validar cada campo
    const usernameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9]{3,30}$/; // Permitir letras, números y caracteres especiales para usuario
    const emailRegex = /^[a-zA-Z\d]+@(outlook|hotmail|gmail|live|example)\.(com|es|ec)$/i; // Formato de correo electrónico válido
    const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z]).{5,100}$/; // Al menos un dígito y una letra, mínimo 5 caracteres
    // Función para validar el formulario
    const validarFormulario = (event) => {
        event.preventDefault(); // Evitar que se recargue la página al enviar el formulario
        // Validar cada campo con su expresión regular correspondiente
        if (!usernameRegex.test(username) && !emailRegex.test(username)) {
            alert("Por favor ingrese correctamente su Usuario o Correo electronico.");
            return false;
        }
        if (!passwordRegex.test(password)) {
            alert("Por favor ingrese su contraseña.");
            return false;
        }
        // Si pasa todas las validaciones, muestra un mensaje de inicio de sesión exitoso
        alert("Inicio de sesión exitoso para el usuario: " + username);
        return true;
    };
    // Función para manejar el inicio de sesión
    const handleLogin = (event) => {
        event.preventDefault();
        // Validar el formulario antes de enviar a Firebase
        if (!validarFormulario()) {
            return;
        }
        // Iniciar sesión usando Firebase Authentication
        /*firebase.auth().signInWithEmailAndPassword(username, password)
            .then((userCredential) => {
                // Inicio de sesión exitoso
                alert('Inicio de sesión exitoso');
                console.log(userCredential);
                // Puedes redirigir a otra página después del inicio de sesión si es necesario
            })
            .catch((error) => {
                // Error en el inicio de sesión
                console.error('Error al iniciar sesión:', error);
                alert('Error al iniciar sesión. Verifica tus credenciales e intenta nuevamente.');
            });*/
    };
return(
    <div></div>
);/*
    return (
        <div>
            <form onSubmit={handleLogin}>
            <h2>Inicio de Usuario</h2>
                <label htmlFor="username">Usuario o Email:</label>
                <input type="text" id="username" name="username" value={username} onChange={handleUsernameChange} required placeholder="Ingrese usuario o correo electrónico" />
                <label htmlFor="password">Contraseña:</label>
                <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} required placeholder="Contraseña" />
                <button type="submit">Iniciar Sesión</button>
                <a href="./registroUsuario" type="button">Crear cuenta</a><br /><br />
                
            </form>
        </div>
    );*/
};

export default InicioSesion;
