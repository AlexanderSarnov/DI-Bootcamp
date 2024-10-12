// src/components/TaskList.jsx
import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, editTask, deleteTask, completeTask } from '../features/state/slice';
import { selectTasksByCategory } from '../features/state/selectors';

const TaskList = () => {
    const selectedCategoryId = useSelector((state) => state.selectedCategoryId);
    const tasks = useSelector((state) => selectTasksByCategory(state, selectedCategoryId));
    const dispatch = useDispatch();
    const [newTaskName, setNewTaskName] = useState('');
    const [editingTaskId, setEditingTaskId] = useState(null);
    const [editingTaskName, setEditingTaskName] = useState('');

    const handleAddTask = useCallback(() => {
        const newTask = {
            id: tasks.length + 1,
            name: newTaskName,
            categoryId: selectedCategoryId || 1, // Default category ID if none selected
            completed: false,
        };
        dispatch(addTask(newTask));
        setNewTaskName('');
    }, [dispatch, newTaskName, tasks.length, selectedCategoryId]);

    const handleEdit = useCallback(
        (id, name) => {
            dispatch(editTask({ id, name }));
            setEditingTaskId(null);
        },
        [dispatch]
    );

    const handleDelete = useCallback(
        (id) => {
            dispatch(deleteTask(id));
        },
        [dispatch]
    );

    const handleComplete = useCallback(
        (id, completed) => {
            dispatch(completeTask({ id, completed }));
        },
        [dispatch]
    );

    const startEditing = (id, name) => {
        setEditingTaskId(id);
        setEditingTaskName(name);
    };

    return (
        <div>
            <h2>Task List</h2>
            <input
                type="text"
                value={newTaskName}
                onChange={(e) => setNewTaskName(e.target.value)}
                placeholder="New Task Name"
            />
            <button onClick={handleAddTask}>Add Task</button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                        {editingTaskId === task.id ? (
                            <input
                                type="text"
                                value={editingTaskName}
                                onChange={(e) => setEditingTaskName(e.target.value)}
                                onBlur={() => handleEdit(task.id, editingTaskName)}
                            />
                        ) : (
                            <span onClick={() => startEditing(task.id, task.name)}>{task.name}</span>
                        )}
                        <button onClick={() => handleComplete(task.id, !task.completed)}>
                            {task.completed ? 'Undo' : 'Complete'}
                        </button>
                        <button onClick={() => handleDelete(task.id)}>Delete</button>
                        {editingTaskId !== task.id && (
                            <button onClick={() => startEditing(task.id, task.name)}>Edit</button>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
