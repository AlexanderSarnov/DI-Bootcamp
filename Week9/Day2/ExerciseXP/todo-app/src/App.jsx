import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';

function App() {
    return (
            <div className="App">
                <h1>Todo List</h1>
                <AddTodo />
                <TodoList />
            </div>
    );
}

export default App;
