import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface ShoppingCartI {
  totalPay: number;
  products: Array<Product>;
}

export interface Product {
  id: number;
  active: boolean;
  categorieId: number;
  description: string;
  name: string;
  price: string;
}

export interface HomeState {
  shoppingCart: ShoppingCartI;
  status: "idle" | "loading" | "failed";
}

const initialState: HomeState = {
  shoppingCart: { totalPay: 0, products: [] },
  status: "idle",
};

/* export const incrementAsync = createAsyncThunk(
  'register',
  async (r) => {
    const response = await fetchCount();
    return response.data;
  }
); */

export const registerSlice = createSlice({
  name: "home",
  initialState,

  reducers: {
    updateShoppingCart: (state, { payload }) => {
      console.log("REDUCER", payload.action);
      state.shoppingCart.totalPay += payload.price;
      state.shoppingCart.products = [...state.shoppingCart.products, payload];
    },
  },

  extraReducers: (builder) => {},
});

export const productsInShoppingCart = (state: RootState) =>
  state.home.shoppingCart.products;

export const dataInShoppingCart = (state: RootState) => state.home.shoppingCart;

export const { updateShoppingCart } = registerSlice.actions;

export default registerSlice.reducer;
