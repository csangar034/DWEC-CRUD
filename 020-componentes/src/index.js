import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App.js'

const element = (
  <div>
    <h1>CRUD</h1>
    <ol>
      <li>Crear una interfaz para una aplicación CRUD. Utilizaremos un array para almacenar los elementos.</li>
      <ol>
        <li><b>Create</b>: Crear nuevos elementos</li>
        <li><b>Read</b>: Mostrar elementos</li>
        <li><b>Update</b>: Actualizar elementos</li>
        <li><b>Delete</b>: Borrar elementos</li>
      </ol>
    </ol>
    <hr/>
    <App />
  </div>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);

