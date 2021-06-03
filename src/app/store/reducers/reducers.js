import { combineActions, handleActions } from 'redux-actions';

import {
  addTodo,
  addTodoAsync,
  clearTodos,
  deleteTodo,
  toggleTodo,
} from '../actions/actions';
let index = 3;

const defaultState = [
  { id: 0, name: 'Add fake async api', isDone: true },
  { id: 1, name: 'lint code ', isDone: true },
  { id: 2, name: 'Move stuff around', isDone: true },
];

const todos = handleActions(
  {
    [addTodo]: (state, action) => [
      ...state,
      { id: index++, name: action.payload.name, isDone: false },
    ],
    [clearTodos]: () => [],
    [deleteTodo]: (state, action) =>
      state.filter((todo) => todo.id !== action.payload.id),

    [toggleTodo]: (state, action) =>
      state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, isDone: !todo.isDone } : todo
      ),
  },
  defaultState
);

export default todos;
