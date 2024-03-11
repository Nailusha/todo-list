import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import TodoList from '../TodoList';
import TodoForm from '../../features/todos/TodoForm';
import store from '../../store';
import './App.css'; // Импортируем файл стилей

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <div className="appContainer"> {/* Используем классы из файла стилей */}
                <h1 className="title">Todo App</h1> {/* Используем классы из файла стилей */}
                <TodoForm />
                <TodoList />
            </div>
        </Provider>
    );
};

export default App;
