import React, { useState } from 'react';
import Calendar from './components/Calendar';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import './App.css';

function App() {
    const [selectedDay, setSelectedDay] = useState(new Date().toISOString().split('T')[0]);

    return (
        <div>
            <h1>Daily Planner</h1>
            <Calendar onSelectDay={setSelectedDay} />
            <AddTask selectedDay={selectedDay} />
            <TaskList selectedDay={selectedDay} />
        </div>
    );
}

export default App;
