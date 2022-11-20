import {
  AnyAction,
  createSlice,
  PayloadAction,
  ThunkAction,
} from "@reduxjs/toolkit";
import { RootState } from "./store";

interface initialStatType {
  username: string;
  password: string;
  isAuthorized: boolean;
  authorizationError: boolean;
}

const initialState: initialStatType = {
  username: "Admin",
  password: "12345",
  isAuthorized: Boolean(localStorage.getItem("isAuthorized")),
  authorizationError: false,
};

export const authorization = createSlice({
  name: "authorization",
  initialState,
  reducers: {
    setIsAuthorized: (
      state: initialStatType,
      action: PayloadAction<boolean>
    ) => {
      state.isAuthorized = action.payload;
    },
    setAuthorizationError: (
      state: initialStatType,
      action: PayloadAction<boolean>
    ) => {
      state.authorizationError = action.payload;
    },
  },
});

export const authorizationThunk =
  (
    username: string | undefined,
    password: string | undefined,
    remember: boolean | null
  ): ThunkAction<void, RootState, unknown, AnyAction> =>
  (dispatch, getState) => {
    if (
      username === getState().authorization.username &&
      password === getState().authorization.password
    ) {
      dispatch(setIsAuthorized(true));
      dispatch(setAuthorizationError(false));
      if (remember) {
        localStorage.setItem("isAuthorized", "true");
      }
    } else {
      dispatch(setAuthorizationError(true));
    }
  };

export const { setIsAuthorized, setAuthorizationError } = authorization.actions;

export default authorization.reducer;
