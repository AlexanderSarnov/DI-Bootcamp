import React from 'react';
import { useContext } from 'react';
import { ThemeModeContext } from '../App';

const Header = () => {
    const [themeMode, setThemeMode] = useContext(ThemeModeContext);
    return (
        <div className={themeMode((mode) => (mode === 'light' ? 'light' : 'dark'))}>
            <h2>Header</h2>
            <h3>Current Theme:</h3>
            <button onClick={() => setThemeMode((mode) => (mode === 'light' ? 'dark' : 'light'))}></button>
        </div>
    );
};

export default Header;
