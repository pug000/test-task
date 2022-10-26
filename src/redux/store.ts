import { combineReducers, configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({});

const store = configureStore({
  reducer: rootReducer,
});

type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export type { RootState, AppDispatch };
export default store;
