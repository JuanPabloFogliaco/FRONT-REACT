import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import ShoppingCartSlice from "../redux-slices/ShoppingCartSlice";
import loginReducer from "../redux-slices/LoginSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    home: ShoppingCartSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
