import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LoginAPI } from "../api/AuthorizationAPI";

export interface RequestLogin {
  email: string;
  password: string;
}

export interface LoginState {
  user: any;
  loading: boolean;
  status: "idle" | "loading" | "failed";
}

const initialState: LoginState = {
  user: {},
  loading: false,
  status: "idle",
};

export const LoginSync = createAsyncThunk(
  "/login",
  async (req: RequestLogin, thunkApi) => {
    let response;
    try {
      response = await LoginAPI(req.email, req.password);
    } catch (error) {
      console.log("Error al logear");
    }

    return response;
  }
);

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(LoginSync.fulfilled, (state, { payload }) => {
      state.user = payload;
      state.loading = false;
    });
    builder.addCase(LoginSync.pending, (state, { payload }) => {
      state.loading = true;
    });
    builder.addCase(LoginSync.rejected, (state, { payload }) => {
      state.loading = false;
    });
  },
});

export default loginSlice.reducer;
