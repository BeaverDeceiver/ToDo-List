import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './reducers/reducers';
import thunk from 'redux-thunk';
import Saga from 'redux-saga';
import rootSaga from './sagas';

const sagaMiddleware = Saga();

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk, sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
