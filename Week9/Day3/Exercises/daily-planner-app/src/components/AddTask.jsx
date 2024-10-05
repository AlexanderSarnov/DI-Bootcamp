// src/components/AddTask.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/task/taskSlice';

const AddTask = ({ selectedDay }) => {
    // State to manage the input text for the new task
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            // Dispatch the addTask action with the new task
            dispatch(addTask({ day: selectedDay, task: { id: Date.now(), text } }));
            setText(''); // Clear the input field
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default AddTask;
