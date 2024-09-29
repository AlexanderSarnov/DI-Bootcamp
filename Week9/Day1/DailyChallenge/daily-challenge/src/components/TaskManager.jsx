import React, { useState, useRef } from 'react';
import { useTask, ADD_TASK, REMOVE_TASK, EDIT_TASK, TOGGLE_TASK, FILTER_TASKS } from './TaskContext.jsx';

function TaskManager() {
    const { state, dispatch } = useTask();
    const [taskText, setTaskText] = useState('');
    const [editTaskId, setEditTaskId] = useState(null);
    const inputRef = useRef(null);

    const handleAddTask = () => {
        if (taskText.trim() === '') return;
        dispatch({ type: ADD_TASK, text: taskText });
        setTaskText('');
    };

    const handleEditTask = (id, text) => {
        setEditTaskId(id);
        setTaskText(text);
        inputRef.current.focus();
    };

    const handleSaveEdit = () => {
        if (taskText.trim() === '') return;
        dispatch({ type: EDIT_TASK, id: editTaskId, text: taskText });
        setEditTaskId(null);
        setTaskText('');
    };

    const handleFilterChange = (filter) => {
        dispatch({ type: FILTER_TASKS, filter });
    };

    const filteredTasks = state.tasks.filter((task) => {
        if (state.filter === 'completed') return task.completed;
        if (state.filter === 'active') return !task.completed;
        return true;
    });

    return (
        <div className="task-manager">
            <h1>Task Manager</h1>
            <input
                type="text"
                placeholder="Add a new task"
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
                ref={inputRef}
            />
            <button onClick={editTaskId ? handleSaveEdit : handleAddTask}>{editTaskId ? 'Save' : 'Add Task'}</button>
            <div className="filters">
                <button onClick={() => handleFilterChange('all')}>All</button>
                <button onClick={() => handleFilterChange('completed')}>Completed</button>
                <button onClick={() => handleFilterChange('active')}>Active</button>
            </div>
            <ul>
                {filteredTasks.map((task) => (
                    <li key={task.id} className={task.completed ? 'completed' : ''}>
                        <span onClick={() => dispatch({ type: TOGGLE_TASK, id: task.id })}>{task.text}</span>
                        <button onClick={() => handleEditTask(task.id, task.text)}>Edit</button>
                        <button onClick={() => dispatch({ type: REMOVE_TASK, id: task.id })}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskManager;
