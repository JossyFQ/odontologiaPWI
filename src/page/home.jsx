import React from 'react';
import Navbar from '../components/Navbar';

const home = () => {
  return (
    <div>
        <div class="titulo">
          <h1 center class="titulo">Odontología del policlínico ULEAM</h1>
        </div>
        <Navbar />
        <iframe src="../components/Navbar.jsx" width="100%" height="auto" frameborder="0"></iframe>
    </div>
  )
};
export default home;