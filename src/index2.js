import React from 'react';
import ReactDOM from 'react-dom/client';
import InicioSesion from './page/inicioSesion';
import App from './App'; // Asegúrate de que la ruta sea correcta si tu archivo principal de enrutamiento no se llama App.js
//import RegistroUsuario from './page/registroUsuario';
//import { BrowserRouter as Router } from 'react-router-dom';
import RegistroUsuario from './page/registroUsuario';
import Home from './page/home';
import MenuCirugia from './page/menuCirugia';
import DatosPaciente from './page/datosPaciente';
import Diagnostico from './page/diagnostico';
import IndicadorSaludBucal from './page/indicadorSaludBucal';
import RegistroTratamiento from './page/registroTratamiento';
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([{
  path: "/Home",
  element: <App />,
  children:[
      {
        path: "/",
        element: <InicioSesion />,
      },
      {
        path: "/RegistroUsuario",
        element: <RegistroUsuario />,
      },
      {
        path: "/Home",
        element: <Home />,
      },
      {
        path: "/MenuCirugia",
        element: <MenuCirugia />,
      },
      {
        path: "/RegistroTratamiento",
        element: <RegistroTratamiento />,
      },
      {
        path: "/MenuCirugia:DatosPaciente",
        element: <DatosPaciente />,
      },
      {
        path: "/MenuCirugia:Diagnostico",
        element: <Diagnostico />,
      },
      {
        path: "/MenuCirugia:IndicadorSaludBucal",
        element: <IndicadorSaludBucal />,
      },
    ]
  }
]);

//ReactDOM.render(<App />, document.getElementById('root'));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <InicioSesion />
    <RouterProvider router={router} />
  </React.StrictMode>
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);