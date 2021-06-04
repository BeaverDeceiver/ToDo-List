// A mock function to mimic making an async request for data
export function fetchTodo(name) {
  return new Promise((resolve) =>
    setTimeout(
      () => resolve({ name: `_${name.payload}_` }),
      Math.random() * 900
    )
  );
}
