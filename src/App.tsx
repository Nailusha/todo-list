import React from 'react';
import { Provider } from 'react-redux';
import TodoList from './components/TodoList';
import TodoForm from './features/todos/TodoForm';
import store from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Todo List</h1>
        <TodoForm />
        <TodoList />
      </div>
    </Provider>
  );
};

export default App;
