import { combineReducers, configureStore } from '@reduxjs/toolkit';

import addressApi from './services/addressService';
import menuSlice from './slices/menuSlice';
import querySlice from './slices/querySlice';

const rootReducer = combineReducers({
  menu: menuSlice,
  query: querySlice,
  [addressApi.reducerPath]: addressApi.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(addressApi.middleware),
});

type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export type { RootState, AppDispatch };
export default store;
