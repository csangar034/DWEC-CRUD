import React, {useState} from 'react';
import './App.css';
import Create from './Create/Create.js'
import Read from './Read/Read.js'

// Constante de deseos por defecto
const initialElems = [
    { text: 'Hacer TicTacToe', done: true },
    { text: 'Hacer CRUD', done: false },
    { text: 'Personalizar TicTacToe', done: true },
    { text: 'Personalizar CRUD', done: false }
];

const App = () => {

    // Con el Hook useState, hago que pueda utilizar y cambiar el array de elementos iniciales
    const [elems, setElems] = useState(initialElems)

    return (
        <div className="app">
            <h1>CRUD</h1>
            <Create onNewElem={elem => setElems([ elem, ...elems])}/>
            <Read elems={elems} onElemsChange={elems => setElems(elems)}/>
            <button 
                className="crud-clear" 
                type="button"
                onClick={() => setElems(elems.filter(elem => !elem.done))}
            >
                    Borrar hechos
            </button>
        </div>
    )
};

export default App;