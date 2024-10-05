// src/components/TodoList.js

import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem.jsx';

const TodoList = () => {
    const todos = useSelector((state) => state.todo.todos);

    return (
        <div>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </div>
    );
};

export default TodoList;
