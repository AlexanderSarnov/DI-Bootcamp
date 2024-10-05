// src/components/EditTask.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask } from '../features/task/taskSlice';

const EditTask = ({ task, selectedDay }) => {
    // State to manage the input text for editing the task
    const [text, setText] = useState(task.text);
    const dispatch = useDispatch();

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            // Dispatch the editTask action with the updated task
            dispatch(editTask({ day: selectedDay, taskId: task.id, newTask: { ...task, text } }));
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <button type="submit">Edit Task</button>
        </form>
    );
};

export default EditTask;
