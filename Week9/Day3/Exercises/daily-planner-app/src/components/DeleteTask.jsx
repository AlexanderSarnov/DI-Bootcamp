// src/components/DeleteTask.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../features/task/taskSlice';

const DeleteTask = ({ taskId, selectedDay }) => {
    const dispatch = useDispatch();

    // Handle task deletion
    const handleDelete = () => {
        // Dispatch the deleteTask action with the task ID
        dispatch(deleteTask({ day: selectedDay, taskId }));
    };

    return <button onClick={handleDelete}>Delete</button>;
};

export default DeleteTask;
