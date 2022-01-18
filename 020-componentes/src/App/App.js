import React from 'react';
import './App.css';
import Create from './Create/Create.js'
import Read from './Read/Read.js'

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
        <Create />
        <Read elems={elems}/>
        <button className="crud-clear" type="button">Borrar</button>
    </div>
);

export default App;