import './App.css';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Nav from './components/Nav.jsx';

import { Route, Routes, Link } from 'react-router-dom';

function App() {
    return (
        <>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<h2>404. Page not found</h2>} />
            </Routes>
        </>
    );
}

export default App;
