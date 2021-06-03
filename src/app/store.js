import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../app/reducers/reducers';
import thunk from 'redux-thunk';

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
