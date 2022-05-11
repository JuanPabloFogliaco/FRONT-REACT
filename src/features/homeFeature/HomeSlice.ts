import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './HomeAPI';

export interface ShoppingCartI {
  totalPay: number,
  products: Array<Product>,
}

export interface Product {
  title: string,
  stock: string,
  price: string,
}

export interface RegisterState {
  shoppingCart: ShoppingCartI
  status: 'idle' | 'loading' | 'failed';
}

const initialState: RegisterState = {
  shoppingCart: { totalPay: 0, products: [] },
  status: 'idle',
};

/* export const incrementAsync = createAsyncThunk(
  'register',
  async (r) => {
    const response = await fetchCount();
    return response.data;
  }
); */

export const registerSlice = createSlice({
  name: 'home',
  initialState,

  reducers: {
    updateShoppingCart: (state, { payload }) => {
      console.log("REDUCER",payload.action)
      state.shoppingCart.totalPay += payload.price;
      state.shoppingCart.products = [...state.shoppingCart.products, payload]
    }
  },

  extraReducers: (builder) => {
  },
});

export const {updateShoppingCart } = registerSlice.actions;





export default registerSlice.reducer;
