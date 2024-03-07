import React from 'react';
import { useDispatch } from 'react-redux';
import { Todo } from '../features/todos/todosSlice';
import { toggleTodo, removeTodo } from '../features/todos/todosSlice';

interface TodoItemProps {
    todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
    const dispatch = useDispatch();

    const handleToggle = () => {
        dispatch(toggleTodo(todo.id));
    };

    const handleRemove = () => {
        dispatch(removeTodo(todo.id));
    };

    return (
        <li>
            <input type="checkbox" checked={todo.completed} onChange={handleToggle} />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
            <button onClick={handleRemove}>Remove</button>
        </li>
    );
};

export default TodoItem;
