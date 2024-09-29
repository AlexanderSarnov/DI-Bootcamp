// ThemeSwitcher.js
import React from 'react';
import { useTheme } from './ThemeContext';
import '../App.css'; // connect stylesheet

function ThemeSwitcher() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={`theme-switcher ${theme === 'light' ? 'light-theme' : 'dark-theme'}`}>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <p>Current Theme: {theme}</p>
        </div>
    );
}

export default ThemeSwitcher;
