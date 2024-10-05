import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from '../redux/todosSlice';
import TodoItem from './TodoItem';

const TodoList = () => {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={() => dispatch(toggleTodo(todo.id))}
                    onRemove={() => dispatch(removeTodo(todo.id))}
                />
            ))}
        </ul>
    );
};

export default TodoList;
