import React from 'react';
import TodoList from './components/TodoList.jsx';
import AddTodo from './components/AddTodo.jsx';
import './App.css';

function App() {
    return (
        <div>
            <h1>Todo List</h1>
            <AddTodo />
            <TodoList />
        </div>
    );
}

export default App;
