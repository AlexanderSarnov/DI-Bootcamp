import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../App';

const Button = () => {
    const { setCount } = useContext(AppContext);

    return <button onClick={() => setCount((count) => count + 1)}>Add</button>;
};

export default Button;
