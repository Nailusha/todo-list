import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './todosSlice';

const TodoForm: React.FC = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim() !== '') {
      dispatch(addTodo({ id: Date.now(), text, completed: false }));
      setText('');
      if (inputRef.current) {
        inputRef.current.focus(); // Проверка на существование элемента перед его использованием
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={handleChange} ref={inputRef} /> {/* Привязываем ref к input */}
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;

