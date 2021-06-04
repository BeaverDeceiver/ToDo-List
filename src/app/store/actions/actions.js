import { createActions, createAction } from 'redux-actions';

export const { addTodo, toggleTodo, deleteTodo, clearTodos } = createActions({
  ADD_TODO: (name) => ({ name }),
  TOGGLE_TODO: (id) => ({ id }),
  DELETE_TODO: (id) => ({ id }),
  CLEAR_TODOS: () => ({}),
});

// export const addTodo = createAction('ADD_TODO');

// export const toggleTodo = createAction('TOGGLE_TODO');

// export const deleteTodo = createAction('DELETE_TODO');

// export const clearTodos = createAction('CLEAR_TODOS');

export const addTodoAsync = createAction('ADD_TODO_ASYNC');
