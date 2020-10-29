import { combineReducers } from '@reduxjs/toolkit';
import DateReducer from './Date/dateSlice';

const rootReducer = combineReducers({
  date: DateReducer,
});

export default rootReducer;
