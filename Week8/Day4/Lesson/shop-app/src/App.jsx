import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Shop from './components/Shop';
import Product from './components/Product';
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Shop />} />
                <Route exact path="/products/:productId" element={<Product />} />
            </Routes>
        </>
    );
}

export default App;
