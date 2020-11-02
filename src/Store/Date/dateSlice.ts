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
  changeDate: CaseReducer<DateState, PayloadAction<DateTime>>;
}

export const dateSlice = createSlice<DateState, DateSliceCaseReducers>({
  name: 'date',
  initialState,
  reducers: {
    changeDate: (state, action) => {
      state.current = action.payload;
    },
  },
});

export const { changeDate } = dateSlice.actions;

export default dateSlice.reducer;
