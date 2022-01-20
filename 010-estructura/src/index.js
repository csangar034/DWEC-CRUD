import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App.js'

const element = (
  <div>
    <h1>Actividad CRUD</h1>
    <ol>
      <li>Crear una interfaz para una aplicación de tipo CRUD. Utilizaremos un array para almacenar los elementos y realizará las siguientes funciones.</li>
      <ol>
        <li><b>Crear</b>: Crear nuevos elementos</li>
        <li><b>Leer</b>: Mostrar elementos</li>
        <li><b>Borrar hechos</b>: Borrar elementos que están marcados como hechos</li>
      </ol>
    </ol>
    <hr/>
    <App />
    <hr/>
    <h2>Para practicar:</h2>
    <p>
      Transforma en componentes las funcionalidades para <i>Crear</i> y <i>Leer</i>
    </p>
  </div>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);

