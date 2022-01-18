import React, {useState} from 'react';
import './App.css';
import Create from './Create/Create.js'
import Read from './Read/Read.js'

const initialElems = [
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

const App = () => {

    const [elems, setElems] = useState(initialElems)

    return (
        <div className="app">
            <h1>CRUD</h1>
            <Create onNewElem={elem => setElems([ elem, ...elems])}/>
            <Read elems={elems} onElemsChange={setElems}/>
            <button className="crud-clear" type="button">Borrar</button>
        </div>
    )
};

export default App;