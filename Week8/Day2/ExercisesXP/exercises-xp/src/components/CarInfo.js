import { useState } from 'react';
import Garage from './Garage';

export default function CarInfo({ carInfo }) {
    const [color] = useState('red');
    return (
        <>
            <h2>This car is {carInfo.model}</h2>
            <p>And its name is {carInfo.name}</p>
            <p>It's color is {color}</p>
            <Garage size="small" />
        </>
    );
}
