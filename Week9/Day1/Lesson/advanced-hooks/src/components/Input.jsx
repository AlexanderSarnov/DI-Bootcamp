import React from 'react';
import { useContext } from 'react';
import { DisplayContext } from './Display';

const Input = () => {
    const { setInput } = useContext(DisplayContext);
    return (
        <>
            <h2>Input</h2>
            <input onChange={(e) => setInput(e.target.value)} />
        </>
    );
};

export default Input;
