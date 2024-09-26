import { useState, useEffect } from 'react';

export default function Color() {
    const [favoriteColor, setFavoriteColor] = useState('red');

    useEffect(() => {
        alert('useEffect reached');
    }, [favoriteColor]);

    const changeColor = () => {
        setFavoriteColor((color) => (color === 'red' ? 'blue' : 'red'));
    };

    return (
        <>
            <h1>My Favorite Color is {favoriteColor}</h1>
            <button onClick={changeColor}>Change Color</button>
        </>
    );
}
