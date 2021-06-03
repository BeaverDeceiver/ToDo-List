import { fetchTodo } from '../apis/ToDoAPI';

let index = 3;
export const addTodo = (name) => ({
  type: 'ADD_TODO',
  id: index++,
  name,
});

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id,
});

export const deleteTodo = (id) => ({
  type: 'DELETE_TODO',
  id,
});

export const clearTodos = () => ({
  type: 'CLEAR_TODOS',
});

export const addTodoAsync = (name) => (dispatch) =>
  fetchTodo(name).then((response) => {
    dispatch(addTodo(response.name));
  });
