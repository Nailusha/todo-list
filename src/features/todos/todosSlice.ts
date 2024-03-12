import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

export interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

interface TodosState {
    todos: Todo[];
}

const initialState: TodosState = {
    todos: JSON.parse(localStorage.getItem('todos') || '[]'), // Загружаем todos из локального хранилища при инициализации
};

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<Todo>) => {
            state.todos.push(action.payload);
            localStorage.setItem('todos', JSON.stringify(state.todos)); // Сохраняем todos в локальное хранилище после добавления нового todo
        },
        toggleTodo: (state, action: PayloadAction<number>) => {
            const todo = state.todos.find(todo => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
                localStorage.setItem('todos', JSON.stringify(state.todos)); // Обновляем todos в локальном хранилище после изменения состояния todo
            }
        },
        removeTodo: (state, action: PayloadAction<number>) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
            localStorage.setItem('todos', JSON.stringify(state.todos)); // Обновляем todos в локальном хранилище после удаления todo
        },
    },
});

export const { addTodo, toggleTodo, removeTodo } = todosSlice.actions;

export const selectTodos = (state: RootState) => state.todos.todos;

export default todosSlice.reducer;
