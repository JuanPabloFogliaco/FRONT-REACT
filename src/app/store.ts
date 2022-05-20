import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import HomeReducer from "../features/homeFeature/HomeSlice";
import loginReducer from "../features/loginFeature/LoginSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    home: HomeReducer,
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
