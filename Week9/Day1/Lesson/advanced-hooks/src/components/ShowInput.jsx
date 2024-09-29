import React from 'react';
import { DisplayContext } from './Display';
import { useContext } from 'react';

const ShowInput = () => {
    const { input } = useContext(DisplayContext);
    return (
        <>
            <h2>ShowInput</h2>
            {input}
        </>
    );
};

export default ShowInput;
