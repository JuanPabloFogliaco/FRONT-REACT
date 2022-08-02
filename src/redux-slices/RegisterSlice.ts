import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RegisterAPI } from "../api/AuthorizationAPI";

export interface RequestRegister {
  name: string;
  email: string;
  password: string;
}

export interface RegisterState {
  user: any;
  loading: boolean;
  status: "idle" | "loading" | "failed";
}

const initialState: RegisterState = {
  user: {},
  loading: false,
  status: "idle",
};

export const RegisterSync = createAsyncThunk(
  "/register",
  async (req: RequestRegister, thunkApi) => {
    let response;
    try {
      response = await RegisterAPI(req.name, req.email, req.password);
    } catch (error) {
      console.log("Error al logear");
    }

    return response;
  },
);

export const RegisterSlice = createSlice({
  name: "Register",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(RegisterSync.fulfilled, (state, { payload }) => {
      state.loading = false;
    });
    builder.addCase(RegisterSync.pending, (state, { payload }) => {
      state.loading = true;
    });
    builder.addCase(RegisterSync.rejected, (state, { payload }) => {
      state.loading = false;
    });
  },
});

export default RegisterSlice.reducer;
