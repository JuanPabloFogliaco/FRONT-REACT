import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetCategoriesAPI, GetProductsAPI } from "../api/HomeAPI";
import { RootState } from "../app/store";
import { GetLocalStorage } from "../features/utils";

export interface Product {
  idProduct: number;
  price: number;
  stock: false;
  count: number;
  description: string;
  idCategorie: number;
  name: string;
  id: string;
  totalQuantity: number;
}

export interface Categories {
  idCategorie: number;
  name: string;
  id: string;
}

export interface ShoppingCartSlice {
  loading: boolean;
  categories: Array<Categories>;
  products: Array<Product>;
  shoppingCart: Array<Product>;
}

const initialState: ShoppingCartSlice = {
  loading: false,
  categories: [],
  products: [],
  shoppingCart: GetLocalStorage() || [],
};

export const GetCategoriesSync = createAsyncThunk(
  "/get-categories",
  async (thunkApi) => {
    let response;
    try {
      response = await GetCategoriesAPI();
    } catch (error) {
      console.log("Error al obtener categorias");
    }

    return response;
  }
);

export const GetProductsSync = createAsyncThunk(
  "/get-products",
  async (idCategorie: number, thunkApi) => {
    let response;
    try {
      response = await GetProductsAPI(idCategorie);
    } catch (error) {
      console.log("Error al obtener productos para la categoria");
    }

    return response;
  }
);

export const ShoppingCartSlice = createSlice({
  name: "shoppingCartSlice",
  initialState,

  reducers: {
    addToShoppingCart: (state, { payload }) => {
      const existingIndex = state.shoppingCart.findIndex(
        (item) => item.idProduct === payload.idProduct
      );
      if (existingIndex >= 0) {
        state.shoppingCart[existingIndex] = {
          ...state.shoppingCart[existingIndex],
          totalQuantity: state.shoppingCart[existingIndex].totalQuantity + 1,
        };
      } else {
        let tempProductItem = { ...payload, totalQuantity: 1 };
        state.shoppingCart.push(tempProductItem);
      }
      localStorage.setItem("shoppingCart", JSON.stringify(state.shoppingCart));
    },
    descreaseToShoppingCart: (state, { payload }) => {
      const itemIndex = state.shoppingCart.findIndex(
        (item) => item.idProduct === payload.idProduct
      );
      if (state.shoppingCart[itemIndex].totalQuantity > 1) {
        state.shoppingCart[itemIndex].totalQuantity -= 1;
      } else if (state.shoppingCart[itemIndex].totalQuantity === 1) {
        const nextCartItems = state.shoppingCart.filter(
          (item) => item.idProduct !== payload.idProduct
        );
        state.shoppingCart = nextCartItems;
      }

      localStorage.setItem("shoppingCart", JSON.stringify(state.shoppingCart));
    },
    clearCart(state, { payload }) {
      state.shoppingCart = [];
      localStorage.setItem("shoppingCart", JSON.stringify(state.shoppingCart));
    },
    removeFromShoppingCart: (state, { payload }) => {
      state.shoppingCart.map((shoppingCart) => {
        if (shoppingCart.idProduct === payload.idProduct) {
          const nextCartItems = state.shoppingCart.filter(
            (item) => item.idProduct !== shoppingCart.idProduct
          );
          state.shoppingCart = nextCartItems;
        }
        localStorage.setItem(
          "shoppingCart",
          JSON.stringify(state.shoppingCart)
        );
        return state;
      });
    },
    setLoading: (state, { payload }) => {
      state.loading = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(GetCategoriesSync.fulfilled, (state, { payload }) => {
      state.categories = payload;
      state.loading = false;
    });
    builder.addCase(GetCategoriesSync.pending, (state, { payload }) => {
      state.loading = true;
    });
    builder.addCase(GetCategoriesSync.rejected, (state, { payload }) => {
      state.loading = false;
    });

    builder.addCase(GetProductsSync.fulfilled, (state, { payload }) => {
      state.products = payload;
      state.loading = false;
    });
    builder.addCase(GetProductsSync.pending, (state, { payload }) => {
      state.loading = true;
    });
    builder.addCase(GetProductsSync.rejected, (state, { payload }) => {
      state.loading = false;
    });
  },
});

export const getLoading = (state: RootState) => state.home.loading;

export const getCategories = (state: RootState) => state.home.categories;

export const getProducts = (state: RootState) => state.home.products;

export const productsInShoppingCart = (state: RootState) =>
  state.home.shoppingCart;

export const totalQuantityInShoppingCart = (state: RootState) => {
  let count = 0;
  state.home.shoppingCart.forEach((e) => {
    count += e.totalQuantity;
  });
  return count;
};

export const totalPayInShoppingCart = (state: RootState) => {
  let totalPay = 0;
  state.home.shoppingCart.forEach((product) => {
    totalPay += product.totalQuantity * product.price;
  });

  return totalPay;
};

export const {
  addToShoppingCart,
  descreaseToShoppingCart,
  clearCart,
  removeFromShoppingCart,
  setLoading,
} = ShoppingCartSlice.actions;

export default ShoppingCartSlice.reducer;
