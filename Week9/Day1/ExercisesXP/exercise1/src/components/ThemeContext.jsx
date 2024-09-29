// ThemeContext.js
import React, { createContext, useContext, useState } from 'react';

// Create a context with a default value of "light"
const ThemeContext = createContext();

// ThemeProvider component to provide the theme context to its children
function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');

    // Function to toggle the theme between light and dark
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

// Custom hook to use the theme context
function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}

export { ThemeProvider, useTheme };
