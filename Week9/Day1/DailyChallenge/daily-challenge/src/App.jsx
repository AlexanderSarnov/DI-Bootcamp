import React from 'react';
import { TaskProvider } from './components/TaskContext.jsx';
import TaskManager from './components/TaskManager.jsx';
import './App.css'; // Import the CSS file

function App() {
    return (
        <TaskProvider>
            <div className="App">
                <TaskManager />
            </div>
        </TaskProvider>
    );
}

export default App;
