import React from 'react';
import './App.css'
import Titulo from './components/Titulo';
import Formulario from './components/Formulario';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <Titulo></Titulo>
      <Formulario></Formulario>
    </div>
  );
};

export default App;