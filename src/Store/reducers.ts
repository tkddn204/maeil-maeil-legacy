import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

import TodoReducer from './Todo/todoSlice';
import DateReducer from './Date/dateSlice';

// persist reducers
export const localStorageReducers = persistReducer(
  {
    key: 'localStorage',
    storage: localStorage,
  },
  combineReducers({
    Todos: TodoReducer,
  }),
);

const rootReducer = combineReducers({
  localStorage: localStorageReducers,
  date: DateReducer,
});

export default rootReducer;
