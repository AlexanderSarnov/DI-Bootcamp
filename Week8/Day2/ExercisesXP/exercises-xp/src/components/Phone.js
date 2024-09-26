import { useState } from 'react';

export default function Phone() {
    const [phone, setPhone] = useState({
        brand: 'Samsung',
        model: 'Galaxy S20',
        color: 'black',
        year: '2020',
    });

    const changeColor = () => {
        setPhone((prevPhone) => ({
            ...prevPhone,
            color: prevPhone.color === 'black' ? 'blue' : 'black',
        }));
    };

    return (
        <>
            <h1>My phone is a {phone.brand}</h1>
            <p>
                It is {phone.color} {phone.model} from {phone.year}.
            </p>
            <button onClick={changeColor}>Change color</button>
        </>
    );
}
