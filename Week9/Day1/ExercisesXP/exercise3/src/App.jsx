// ! I don't see waht can be changed here, except for adding comments and splitting into several components. This exercises is completed already in its default state

import React, { useReducer, useState } from 'react';

// Reducer function
function todoReducer(state, action) {
    switch (action.type) {
        case 'ADD_TODO':
            // Add a new todo to the state
            return [...state, { id: Date.now(), text: action.text }];
        case 'REMOVE_TODO':
            // Remove a todo by its id
            return state.filter((todo) => todo.id !== action.id);
        default:
            return state;
    }
}

// Event handler to add a new todo
function TodoList() {
    const [todos, dispatch] = useReducer(todoReducer, []);
    const [todoText, setTodoText] = useState('');

    const handleAddTodo = () => {
        if (todoText.trim() === '') return;
        dispatch({ type: 'ADD_TODO', text: todoText });
        setTodoText('');
    };

    // Event handler to remove a todo by its id
    const handleRemoveTodo = (id) => {
        dispatch({ type: 'REMOVE_TODO', id });
    };

    return (
        <div>
            <h1>Todo List</h1>
            <input
                type="text"
                placeholder="Add a new todo"
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)}
            />
            <button onClick={handleAddTodo}>Add Todo</button>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.text}
                        <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function App() {
    return (
        <div className="App">
            <TodoList />
        </div>
    );
}

export default App;
