import { combineReducers, configureStore } from '@reduxjs/toolkit';
import menuSlice from './slices/menuSlice';

const rootReducer = combineReducers({
  menu: menuSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export type { RootState, AppDispatch };
export default store;
