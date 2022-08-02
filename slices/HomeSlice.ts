import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { GetCategoriesAPI, GetProductsAPI } from "../features/homeFeature/HomeAPI";

export interface ShoppingCartI {
  products: Array<Product>;
}
export interface Categories {
  id: number;
  name: string;
  active: boolean;
}
export interface Product {
  id: number;
  idProduct: number;
  price: string;
  stock: boolean;
  count: number;
  description: string;
  idCategorie: number;
  name: string;
  countInShopping: number;
}

export interface HomeState {
  shoppingCart: ShoppingCartI;
  categories: Array<Categories>;
  products: Array<Product>;
  status: "idle" | "loading" | "failed";
  loading: boolean;
}

const initialState: HomeState = {
  products: [],
  categories: [],
  shoppingCart: { products: [] },
  status: "idle",
  loading: false,
};

export const GetCategoriesASYNC = createAsyncThunk(
  "/categories",
  async (thunkAPI) => {
    let response;
    try {
      response = await GetCategoriesAPI();
    } catch (error) {
      return error;
    }
    return response;
  }
);

export const GetProductsASYNC = createAsyncThunk(
  "/products",
  async (idCategorie: number, thunkAPI) => {
    let response;
    try {
      response = await GetProductsAPI(idCategorie);
    } catch (error) {
      return error;
    }
    return response;
  }
);

export const homeSlice = createSlice({
  name: "home",
  initialState,

  reducers: {
    addProductInShoppingCart: (state, { payload }) => {
      let product: Product = {
        id: payload.id,
        idCategorie: payload.idCategorie,
        count: payload.count,
        description: payload.description,
        name: payload.name,
        price: payload.price,
        idProduct: payload.idProduct,
        stock: true,
        countInShopping: 0,
      };
    },
    removeOneProductInShoppingCart: (state, { payload }) => {
      const count = state.shoppingCart.products.filter(
        (p) => p.idProduct === payload
      );
    },
    removeAllProductForCategorieInShoppingCart: (state, { payload }) => {
      const filter = state.shoppingCart.products.filter(
        (e) => e.idProduct !== payload
      );
      state.shoppingCart.products = filter;
    },
    setLoading: (state) => {
      state.loading = true;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(GetCategoriesASYNC.fulfilled, (state, action) => {
      state.status = "idle";
      state.loading = false;
      state.categories = action.payload;
    });
    builder.addCase(GetCategoriesASYNC.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(GetCategoriesASYNC.rejected, (state, action) => {
      state.status = "failed";
      state.loading = false;
    });

    builder.addCase(GetProductsASYNC.fulfilled, (state, action) => {
      state.status = "idle";
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase(GetProductsASYNC.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(GetProductsASYNC.rejected, (state, action) => {
      state.status = "failed";
      state.loading = false;
    });
  },
});

export const LoadingStatus = (state: RootState) => state.home.loading;
export const getCategories = (state: RootState) => state.home.categories;
export const GetProducts = (state: RootState) => state.home.products;
export const countProductsInShoppingCart = (state: RootState): number =>
  state.home.shoppingCart.products.length;
export const totalPayInShoppingCart = (state: RootState): number => {
  let totalPay: number = 0;
  state.home.shoppingCart.products.map((product) => {
    return (totalPay += parseInt(product.price));
  });
  return totalPay;
};
export const productsInShoppingCart = (state: RootState) =>
  state.home.shoppingCart.products;

export const {
  addProductInShoppingCart,
  removeOneProductInShoppingCart,
  removeAllProductForCategorieInShoppingCart,
  setLoading,
} = homeSlice.actions;

export default homeSlice.reducer;
