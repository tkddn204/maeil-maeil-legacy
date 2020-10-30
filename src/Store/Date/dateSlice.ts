import {
  createSlice,
  PayloadAction,
  SliceCaseReducers,
  CaseReducer,
} from '@reduxjs/toolkit';
import { DateTime } from 'luxon';

export interface DateState {
  current: DateTime;
}

const initialState: DateState = {
  current: DateTime.local(),
};

interface DateSliceCaseReducers extends SliceCaseReducers<DateState> {
  change: CaseReducer<DateState, PayloadAction<DateTime>>;
}

export const dateSlice = createSlice<DateState, DateSliceCaseReducers>({
  name: 'date',
  initialState,
  reducers: {
    change: (state, action) => {
      state.current = action.payload;
    },
  },
});

export const { change } = dateSlice.actions;

export default dateSlice.reducer;
