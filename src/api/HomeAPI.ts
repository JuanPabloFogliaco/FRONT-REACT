import axios from "axios";
import { URL_BASE } from "../enviroment";
// A mock function to mimic making an async request for data

export const GetCategoriesAPI = async () => {
  let responseGetCategories;
  try {
    responseGetCategories = await axios.get(`${URL_BASE}categories`);
    return Promise.resolve(responseGetCategories.data);
  } catch (error) {
    return error;
  }
};

export const GetProductsAPI = async (categorieId: number) => {
  let responseGetProducts;
  try {
    responseGetProducts = await axios.get(`${URL_BASE}products?categorieId=${categorieId}`);
    return Promise.resolve(responseGetProducts.data);
  } catch (error) {
    return error;
  }
};
