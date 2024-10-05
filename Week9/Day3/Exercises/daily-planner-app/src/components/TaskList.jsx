// src/components/TaskList.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import EditTask from './EditTask';
import DeleteTask from './DeleteTask';

const TaskList = ({ selectedDay }) => {
    // Access tasks for the selected day from the Redux store
    const tasks = useSelector((state) => state.task.tasks[selectedDay] || []);

    return (
        <div>
            {tasks.map((task) => (
                <div key={task.id}>
                    <span>{task.text}</span>
                    {/* Render EditTask and DeleteTask components for each task */}
                    <EditTask task={task} selectedDay={selectedDay} />
                    <DeleteTask taskId={task.id} selectedDay={selectedDay} />
                </div>
            ))}
        </div>
    );
};

export default TaskList;
