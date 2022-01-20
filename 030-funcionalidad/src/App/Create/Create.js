import React, {useState} from 'react';

// onNewElem = evento que se ejecutará cuando presionemos la tecla Enter
const Create = ( {onNewElem} ) => {
    
    // Guardamos su valor en la variable de estado "newElemText", utilizando el Hook useState() y aplicando la función setNewElemText() cuando se produzca un cambio de estado
    const [newElemText, setNewElemText] = useState('');

    return (
        <fieldset className="crud-input">
            <legend className="crud-input__label">Nuevo elemento</legend>
            <input className="crud-input__input" 
                placeholder="Introduzca el elemento" 
                value={newElemText} 
                onChange={e => setNewElemText(e.target.value)} 
                onKeyUp={
                    (e) => {
                        if(e.key === 'Enter' && newElemText.length){
                            onNewElem({done: false, text: newElemText});
                            setNewElemText('');
                        }
                    }
                }
            />
        </fieldset>
    )
};

export default Create;