import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, markDone, remove, removeAll, selectTodos } from './ToDoSlice';

export default function ToDoList() {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();
  const [task, setTask] = useState('');

  return (
    <div>
      <label>Add todos to list</label>
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="sample text"
      />
      <button
        onClick={() => {
          dispatch(add(task));
          setTask('');
        }}
      >
        Add todo
      </button>
      <button onClick={() => dispatch(removeAll())}>Clear All</button>
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
            <button onClick={() => dispatch(markDone(todo.name))}>
              {!todo.isDone ? 'Mark done' : 'Mark incomplete'}
            </button>
            <button onClick={() => dispatch(remove(todo.name))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
