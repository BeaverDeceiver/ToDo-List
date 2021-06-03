const todos = (
  state = [
    { id: 0, name: 'Add fake async api', isDone: true },
    { id: 1, name: 'lint code ', isDone: true },
    { id: 2, name: 'Move stuff around', isDone: true },
  ],
  action
) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: action.id, name: action.name, isDone: false }];
    case 'ADD_TODO_ASYNC':
      return;
    case 'TOGGLE_TODO':
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, isDone: !todo.isDone } : todo
      );
    case 'DELETE_TODO':
      return state.filter((todo) => action.id !== todo.id);
    case 'CLEAR_TODOS':
      return [];
    default:
      return state;
  }
};

export default todos;
