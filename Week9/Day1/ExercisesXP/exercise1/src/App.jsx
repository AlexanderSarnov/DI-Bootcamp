// App.js
import React from 'react';
import { ThemeProvider } from './components/ThemeContext.jsx';
import ThemeSwitcher from './components/ThemeSwitcher.jsx';

function App() {
    return (
        <ThemeProvider>
            <div className="App">
                <h1>Theme Switcher Example</h1>
                <ThemeSwitcher />
                {/* Other components here */}
            </div>
        </ThemeProvider>
    );
}

export default App;
