import { configureStore } from '@reduxjs/toolkit';
import { MapStateToProps } from 'react-redux';

import rootReducer from './reducers';

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type MapRootStateToProps<P> = MapStateToProps<RootState, P, RootState>;
