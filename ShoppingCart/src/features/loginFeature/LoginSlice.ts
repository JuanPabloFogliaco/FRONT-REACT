import { createSlice } from '@reduxjs/toolkit';


export interface LoginState {
    isLoggedIn: boolean;
    status: 'idle' | 'loading' | 'failed';
}

const initialState: LoginState = {
    isLoggedIn: false,
    status: 'idle',
};



export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {},

    extraReducers: {
     
    },
});


export default loginSlice.reducer;