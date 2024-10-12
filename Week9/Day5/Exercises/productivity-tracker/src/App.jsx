import React, { useState } from 'react';
import TaskList from './components/TaskList';
import CategorySelector from './components/CategorySelector';
import { useTasks } from './features/state/hooks';
import './App.css';

function App() {
    const tasks = useTasks();

    return (
        <div>
            <h1>Productivity Tracker</h1>
            <CategorySelector categoryId={1} />
            <TaskList />
        </div>
    );
}

export default App;
