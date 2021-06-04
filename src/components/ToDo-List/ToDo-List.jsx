import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTodos } from '../../store/selectors/selectors';

import {
  addTodo,
  addTodoAsync,
  toggleTodo,
  deleteTodo,
  clearTodos,
} from '../../store/actions/actions';

export default function ToDoList() {
  const todos = useSelector(selectTodos);
  const [task, setTask] = useState('');

  const dispatch = useDispatch();

  function handleOnAddTodo() {
    if (task !== '') {
      dispatch(addTodo(task));
      setTask('');
    }
  }

  function handleOnAddTodoAsync() {
    if (task !== '') {
      dispatch(addTodoAsync(task));
      setTask('');
    }
  }

  function handleClearTodos() {
    dispatch(clearTodos());
  }

  function handleToggleTodo(id) {
    dispatch(toggleTodo(id));
  }

  function handleDeleteTodo(id) {
    dispatch(deleteTodo(id));
  }

  return (
    <div>
      <header>
        <label>Add todos to list</label>
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="sample text"
        />
        <button onClick={handleOnAddTodo}>Add todo</button>
        <button onClick={handleOnAddTodoAsync}>Add Async</button>
        <button onClick={handleClearTodos}>Clear All</button>
      </header>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <span
              style={{
                textDecoration: todo.isDone ? 'line-through' : 'none',
              }}
            >
              {todo.name}
            </span>
            <button onClick={() => handleToggleTodo(todo.id)}>
              {!todo.isDone ? 'Mark done' : 'Mark incomplete'}
            </button>
            <button onClick={() => handleDeleteTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
