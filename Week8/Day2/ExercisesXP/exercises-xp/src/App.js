// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import CarInfo from './components/CarInfo';
// import Garage from './components/Garage';
import Events from './components/Events';
import Phone from './components/Phone';
import Color from './components/Color';

function App() {
    const carInfo = { name: 'Ford', model: 'Mustang' };

    return (
        <>
            <CarInfo carInfo={carInfo} />
            <Events />
            <Phone />
            <Color />
        </>
    );
}

export default App;
