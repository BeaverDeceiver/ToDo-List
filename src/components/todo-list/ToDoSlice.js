import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchTodo } from './ToDoAPI';
const initialState = {
  todoList: [
    { name: 'Manage time', isDone: false },
    { name: 'Add fake async api ', isDone: false },
  ],
  status: 'idle',
};

export const addAsync = createAsyncThunk('todos/fetchTodo', async (name) => {
  const response = await fetchTodo(name);
  return response.name;
});

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    add: (state, action) => {
      if (action.payload !== '')
        state.todoList.push({ name: action.payload, isDone: false });
    },
    markDone: (state, action) => {
      const markedTodo = state.todoList.find(
        (todo) => todo.name === action.payload
      );

      state.todoList = state.todoList
        .filter((todo) => todo.name !== action.payload)
        .concat([
          {
            ...markedTodo,
            isDone: !markedTodo.isDone,
          },
        ]);
    },
    remove: (state, action) => {
      state.todoList = state.todoList.filter(
        (todo) => todo.name !== action.payload
      );
    },
    removeAll: (state) => {
      state.todoList = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addAsync.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(addAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.todoList.push({ name: action.payload, isDone: false });
      });
  },
});

export const { add, markDone, remove, removeAll } = todosSlice.actions;

export const selectTodos = (state) => state.todo.todoList;

export default todosSlice.reducer;
