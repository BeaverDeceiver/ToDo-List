import { fetchTodo } from '../../../apis/ToDoAPI';
import { createActions } from 'redux-actions';

export const { addTodo, toggleTodo, deleteTodo, clearTodos, addTodoAsync } =
  createActions({
    ADD_TODO: (name) => ({ name }),
    TOGGLE_TODO: (id) => ({ id }),
    DELETE_TODO: (id) => ({ id }),
    CLEAR_TODOS: () => ({}),
    ADD_TODO_ASYNC: (name) => (dispatch) =>
      fetchTodo(name).then((response) => {
        dispatch(addTodo(response.name));
      }),
  });

// export const addTodo = createAction('ADD_TODO');

// export const toggleTodo = createAction('TOGGLE_TODO');

// export const deleteTodo = createAction('DELETE_TODO');

// export const clearTodos = createAction('CLEAR_TODOS');

// export const addTodoAsync = createAction(
//   'ADD_TODO',
//   (name) => (dispatch) =>
//     fetchTodo(name).then((response) => {
//       dispatch(addTodo(response.name));
//     })
// );
