import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface MenuState {
  isBurgerMenuShown: boolean;
}

const initialState: MenuState = {
  isBurgerMenuShown: false,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setBurgerMenuShown(state, action: PayloadAction<boolean>) {
      state.isBurgerMenuShown = action.payload;
    },
  },
});

export const { setBurgerMenuShown } = menuSlice.actions;

export default menuSlice.reducer;
