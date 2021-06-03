import { /*createAsyncThunk,*/ createSlice } from '@reduxjs/toolkit';

const initialState = {
  todoList: [
    { name: 'Manage time', isDone: false },
    { name: 'Add fake async api ', isDone: false },
  ],
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
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
});

export const { add, markDone, remove, removeAll } = todosSlice.actions;

export const selectTodos = (state) => state.todo.todoList;

export default todosSlice.reducer;
