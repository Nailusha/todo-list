import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import TodoItem from '../TodoItem/TodoItem';

const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos.todos); // Используем селектор selectTodos

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
