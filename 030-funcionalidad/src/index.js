import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App.js'

const element = (
  <div>
    <h1>CRUD</h1>
    <ol>
      <li>Crear una interfaz para una aplicación de tipo CRUD. Utilizaremos un array para almacenar los elementos y realizará las siguientes funciones.</li>
      <ol>
        <li><b>Create</b>: Crear nuevos elementos</li>
        <li><b>Read</b>: Mostrar elementos</li>
        <li><b>Borrar hechos</b>: Borrar elementos que están marcados como hechos</li>
      </ol>
    </ol>
    <hr/>
    <App />
    <hr/>
    <h2>Para prácticar:</h2>
    <p>
      Personaliza la app con la siguiente funcionalidad extra:
      <ol>
        <li><b>Actualizar</b>: Crea la funcionalidad necesaria para actualizar uno de los elementos existentes.</li>
        <li><b>Borrar hechos</b>: Transforma el botón en componente, funcionar de la misma manera.</li>
        <li><b>Borrar</b>: Crea la funcionalidad necesaria para seleccionar un elemento y borrarlo.</li>
      </ol>
    </p>
  </div>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);

