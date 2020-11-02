import {
  createSlice,
  PayloadAction,
  SliceCaseReducers,
  CaseReducer,
} from '@reduxjs/toolkit';
import { Todo, TodoGroupCollection } from '../types';

export type TodoState = TodoGroupCollection;

const initialState: TodoState = {
  todos: {},
};

interface DateSliceCaseReducers extends SliceCaseReducers<TodoState> {
  add: CaseReducer<TodoState, PayloadAction<Todo>>;
}

export const todoSlice = createSlice<TodoState, DateSliceCaseReducers>({
  name: 'todos',
  initialState,
  reducers: {
    add: (state, action) => {
      state.todos[action.payload.id] = action.payload;
    },
  },
});

export const { change } = todoSlice.actions;

export default todoSlice.reducer;
