import React, { useState } from 'react';
import UserData from './components/UserData';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <h1>Redux Thunk Exercise</h1>
            <UserData />
        </div>
    );
};

export default App;
