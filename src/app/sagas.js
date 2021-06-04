import { all, put, takeEvery } from 'redux-saga/effects';
import { fetchTodo } from '../apis/ToDoAPI';

// ...

// Our worker Saga: will perform the async increment task
export function* addTodoAsync(name) {
  const response = yield fetchTodo(name);
  yield put({ type: 'ADD_TODO', payload: { name: response.name } });
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchAddTodoAsync() {
  yield takeEvery('ADD_TODO_ASYNC', addTodoAsync);
}

export default function* rootSaga() {
  yield all([watchAddTodoAsync()]);
}
