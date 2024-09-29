import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../App';

const ShowCounter = () => {
    const { count } = useContext(AppContext);
    return <h2>Current Count: {count}</h2>;
};

export default ShowCounter;
