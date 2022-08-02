import { Product } from "../../redux-slices/ShoppingCartSlice";

export interface ResponseLogin {
  data: any;
  code: number;
  message: string;
}
export const setLocalStorageUserInfo = (response: ResponseLogin) => {
  localStorage.setItem("token", JSON.stringify(response.data.token));
  localStorage.setItem(
    "refreshToken",
    JSON.stringify(response.data.refreshToken)
  );
  localStorage.setItem("email", JSON.stringify(response.data.email));
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const deleteDuplicate = (array: Array<Product>) => {
  const uniqueArray = array.filter((thing, index) => {
    const _thing = JSON.stringify(thing);
    return (
      index ===
      array.findIndex((obj) => {
        return JSON.stringify(obj) === _thing;
      })
    );
  });

  return uniqueArray;
};

export const GetLocalStorage = () => {
  let parse;
  if (localStorage.getItem("shoppingCart")) {
    parse = JSON.parse(localStorage.getItem("shoppingCart") || "");
  }
  return parse;
};
