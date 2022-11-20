import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import authorizationRedicer from "./authorizationSlice";

export const store = configureStore({
  reducer: {
    authorization: authorizationRedicer,
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
