import React, { useState } from 'react';
//import firebase from '../firebase'; // Importa tu configuración de Firebase
//import { collection, addDoc } from 'firebase/firestore';
//import { db } from '../firebase/config';

const RegistroUsuario = () => {
    // Estados para almacenar los valores de los campos del formulario
    const [id, setId] = useState('');
    const [user, setUser] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [ciudad, setCiudad] = useState('');
    const [direccion, setDireccion] = useState('');
    const [password, setPassword] = useState('');
    const [validarPassword, setValidarPassword] = useState('');
    const [generoSeleccion, setGeneroSeleccion] = useState(''); // Estado para el género seleccionado
    const [eCivilSeleccion, setECivilSeleccion] = useState(''); // Estado para el estado civil seleccionado
    // Funciones para manejar cambios en los campos del formulario
    const handleIdChange = (event) => setId(event.target.value.trim());
    const handleUserChange = (event) => setUser(event.target.value.trim());
    const handleNombreChange = (event) => setNombre(event.target.value.trim());
    const handleApellidoChange = (event) => setApellido(event.target.value.trim());
    const handleEmailChange = (event) => setEmail(event.target.value.trim());
    const handleTelefonoChange = (event) => setTelefono(event.target.value.trim());
    const handleCiudadChange = (event) => setCiudad(event.target.value.trim());
    const handleDireccionChange = (event) => setDireccion(event.target.value.trim());
    const handlePasswordChange = (event) => setPassword(event.target.value.trim());
    const handleValidarPasswordChange = (event) => setValidarPassword(event.target.value.trim());
    // Funciones para manejar cambios en género y estado civil seleccionados
    const handleGeneroChange = (event) => setGeneroSeleccion(event.target.value);
    const handleECivilChange = (event) => setECivilSeleccion(event.target.value);
    // Expresiones regulares para validar cada campo
    const idRegex = /^\d{9,17}$/;
    const userRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\d]{3,30}$/; // Cedula ID de 8 a 10 dígitos
    const apellidoRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,30}$/; // Solo letras y espacios para apellidos
    const nombreRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,30}$/; // Solo letras y espacios para nombres
    const ciudadRegex = /^[a-zA-Z0-9\s,'-]*$/;
    const direccionRegex = /^[a-zA-Z0-9\s,'-]*$/; // Letras, números, espacios y caracteres especiales para dirección
    const telefonoRegex = /^\d{7,10}$/; // Número de teléfono de 7 a 10 dígitos
    const emailRegex = /^[a-zA-Z\d]+@(outlook|hotmail|gmail|live|example)\.(com|es|ec)$/i; // Formato de correo electrónico válido
    const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z]).{6,100}$/;
    const validarPasswordRegex = /^(?=.*\d)(?=.*[a-zA-Z]).{6,100}$/;
    // Función para validar el formulario
    const validarFormulario = () => {
        // Validación de cada campo con su expresión regular correspondiente
        if (!idRegex.test(id)) {
            alert("Por favor ingrese su cédula.");
            return false;
        }if (!userRegex.test(user)) {
            alert("Por favor ingrese un nombre de Usuario valido.");
            return false;
        }if (!apellidoRegex.test(apellido)) {
            alert("Por favor ingrese Apellido completo.");
            return false;
        }if (!nombreRegex.test(nombre)) {
            alert("Por favor ingrese Nombre completo.");
            return false;
        }if (generoSeleccion === '' || (generoSeleccion !== 'male' && generoSeleccion !== 'female')) {
            alert("Por favor, seleccione su género.");
            return false;
        }if (eCivilSeleccion === '' || (eCivilSeleccion !== 'soltero' && eCivilSeleccion !== 'casado' && eCivilSeleccion !== 'divorciado' && eCivilSeleccion !== 'viudo' && eCivilSeleccion !== 'separado')) {
            alert("Por favor, seleccione su estado Civil.");
            return false;
        }if (!ciudadRegex.test(ciudad)) {
            alert("Por favor ingrese su Ciudad.");
            return false;
        }if (!direccionRegex.test(direccion)) {
            alert("Por favor ingrese una Dirección.");
            return false;
        }if (!telefonoRegex.test(telefono)) {
            alert("Por favor ingrese su numero de Teléfono.");
            return false;
        }if (!emailRegex.test(email)) {
            alert("Por favor ingrese un Correo electrónico valido.");
            return false;
        }if (!passwordRegex.test(password)) {
            alert("La contraseña debe contener al menos un dígito y una letra, mínimo 6 caracteres.");
            return false;
        }if (!validarPasswordRegex.test(validarPassword)) {
            alert("Por favor ingrese la validación de la contraseña.");
            return false;
        }if (password !== validarPassword) {
            alert("Las contraseñas no coinciden. Por favor, inténtelo de nuevo.");
            return false;
        }
        return true;
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        // Validar el formulario antes de enviar a Firebase
        if (!validarFormulario()) {
            return;
        }
        // Guardar datos en Firebase Realtime Database
        /*firebase.database().ref('usuarios').push({
            id,
            user,
            nombre,
            apellido,
            email,
            telefono,
            ciudad,
            direccion
            // No es recomendable guardar la contraseña directamente en la base de datos,
            // en su lugar, se debería usar Firebase Authentication para manejar las contraseñas.
        }).then(() => {
            alert('Usuario registrado exitosamente en Firebase');
            // Limpiar los campos del formulario después de registrar
            setId('');
            setUser('');
            setNombre('');
            setApellido('');
            setEmail('');
            setTelefono('');
            setCiudad('');
            setDireccion('');
            setPassword('');
            setValidarPassword('');
            setGeneroSeleccion('');
            setECivilSeleccion('');
            //console.log(userCredential);
        }).catch((error) => {
            console.error('Error al registrar usuario en Firebase: ', error);
            alert('Ocurrió un error al registrar usuario en Firebase');
        });*/
    };
    /*const comprar = (data) => {
        const pedido = {
            client: data,
            producto: carrito,
            total: precioTotal()
        }
        console.log(pedido);
    }
    <form onSubmit={handleSubmit(comprar)}>//*/
    return (
        <div>
            <div class="navbar"><a href="./inicioSesion.jsx" class="right">Iniciar sesión</a></div>
            <h2>Registro de Empleado</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="id">Cédula:</label>
                <input type="number" id="id" name="id" value={id} onChange={handleIdChange} required placeholder="Número de cédula" />
                <label htmlFor="user">Usuario:</label>
                <input type="text" id="user" name="user" value={user} onChange={handleUserChange} required placeholder="Nombre de usuario" />
                <label htmlFor="seconame">Apellidos:</label>
                <input type="text" id="seconame" name="seconame" value={apellido} onChange={handleApellidoChange} required placeholder="Apellido completo" />
                <label htmlFor="name">Nombres:</label>
                <input type="text" id="name" name="name" value={nombre} onChange={handleNombreChange} required placeholder="Nombre completo" />
                <label htmlFor="gender">Género:</label>
                <select id="gender" name="gender" value={generoSeleccion} onChange={handleGeneroChange} required>
                    <option value="" disabled>Seleccione género</option>
                    <option value="male">Masculino</option>
                    <option value="female">Femenino</option>
                </select>
                <label htmlFor="eCivil">Estado Civil:</label>
                <select id="eCivil" name="eCivil" value={eCivilSeleccion} onChange={handleECivilChange} required>
                    <option value="" disabled>Seleccione estado civil</option>
                    <option value="soltero">Soltero/a</option>
                    <option value="casado">Casado/a</option>
                    <option value="divorciado">Divorciado/a</option>
                    <option value="viudo">Viudo/a</option>
                    <option value="separado">Separado/a</option>
                </select>
                <label htmlFor="ciudad">Ciudad:</label>
                <input type="text" id="ciudad" name="ciudad" value={ciudad} onChange={handleCiudadChange} required placeholder="Ciudad" />
                <label htmlFor="direccion">Dirección:</label>
                <input type="text" id="direccion" name="direccion" value={direccion} onChange={handleDireccionChange} required placeholder="Dirección" />
                <label htmlFor="telefono">Teléfono:</label>
                <input type="number" id="telefono" name="telefono" value={telefono} onChange={handleTelefonoChange} required placeholder="Número de teléfono" />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} required placeholder="Correo electrónico" />
                <label htmlFor="password">Contraseña:</label>
                <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} required placeholder="Contraseña" />
                <label htmlFor="validarPassword">Confirmar Contraseña:</label>
                <input type="password" id="validarPassword" name="validarPassword" value={validarPassword} onChange={handleValidarPasswordChange} required placeholder="Confirmar contraseña" />
                <button type="submit">Registrar</button>
            </form>
        </div>
    );
};

export default RegistroUsuario;
