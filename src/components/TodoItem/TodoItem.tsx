import React from 'react';
import { useDispatch } from 'react-redux';
import { Todo } from '../../features/todos/todosSlice';
import { toggleTodo, removeTodo } from '../../features/todos/todosSlice';
import './TodoItem.css'; // Импортируем файл стилей

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
        <li className="todoItem"> {/* Добавляем класс из файла стилей */}
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={handleToggle}
                style={{ marginRight: '10px' }}
            />
            <span className="todoText">{todo.text}</span> {/* Добавляем класс из файла стилей */}
            <button onClick={handleRemove} className="removeButton">Remove</button> {/* Добавляем класс из файла стилей */}
        </li>
    );
};

export default TodoItem;
