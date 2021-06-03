import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../components/todo-list/ToDoSlice';

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
