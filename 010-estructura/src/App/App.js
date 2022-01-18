import React from 'react';
import './App.css';

const elems = [
    { 
        text: 'Hacer TicTacToe', 
        done: true 
    },
    { 
        text: 'Hacer CRUD', 
        done: false 
    },
    { 
        text: 'Personalizar TicTacToe', 
        done: true 
    },
    { 
        text: 'Personalizar CRUD', 
        done: false 
    }
];

const App = () => (
    <div className="app">
        <h1>CRUD</h1>
        <fieldset className="crud-input">
            <legend className="crud-input__label">Nuevo elemento</legend>
            <input className="crud-input__input" placeholder="Introduzca el elemento" />
        </fieldset>
        <ul className="crud-list">
            {elems.map(({text, done}, i) => (
                <li className={`crud-list__item ${done?"crud-list__item--done":""}`}>   
                    <label htmlFor={`e${i}`}>
                        <input id={`e${i}`} type="checkbox" checked={done}/>
                        {text}
                    </label>
                </li>
            ))}
        </ul>
        <button className="crud-clear" type="button">Borrar</button>
    </div>
);

export default App;