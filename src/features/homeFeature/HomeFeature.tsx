import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Carrousel from "../../component/Carrousel/Carrousel";
import Header from "../../component/Header/Header";
import ShoppingCart from "./shoppingCartFeature/ShoppingCartFeature";
import Filter from "../../component/SubHeader/Filter/Filter";
import SubHeader from "../../component/SubHeader/SubHeader";
import { productsInShoppingCart, updateShoppingCart } from "./HomeSlice";
import { WrapperHome } from "./HomeStyle";
import { GetCategoriesAPI, GetProductsAPI } from "./HomeAPI";

interface ResponseLogin {
  data: any;
  code: number;
  message: string;
}

export function HomeFeature() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const productsCount = useAppSelector(productsInShoppingCart);

  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [openFilter, setOpenFilter] = useState(false);
  const [response, setResponse] = useState<ResponseLogin>({
    code: 0,
    data: null,
    message: "",
  });

  useEffect(() => {
    /*  if (getToken() === null) navigate("/login"); */
    /*  const email = localStorage.getItem("email");
    GetUser(email != null ? email : ""); */
    Promise.all([GetCategories(), GetProducts(1)]).then((values) => {
      console.log(values);
    });
  }, []);

  const GetUser = (email: string) => {
    return axios
      .post(
        "http://localhost:8080/api/v1/users/get-one",
        { email: email },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers":
              "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-User-Agent,<your-custom-header-goes-here>",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
          },
        }
      )
      .then((res) => {
        setResponse({
          data: res.data,
          code: res.data.code,
          message: res.data.message,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const GetProducts = async (categorieId: number) => {
    setLoading(true);
    setProducts([]);
    const responseGetProducts = await GetProductsAPI(categorieId);
    if (!responseGetProducts) return;
    setProducts(responseGetProducts);
    setLoading(false);
  };

  const GetCategories = async () => {
    setLoading(true);
    const responseGetCategories = await GetCategoriesAPI();
    if (!responseGetCategories) return;
    setCategories(responseGetCategories);
    setLoading(false);
  };

  const Logout = () => {
    localStorage.clear();
  };

  const clickButton = async (categorieId: number) => {
    await GetProducts(categorieId);
  };

  const Buy = (product: any) => {
    dispatch(updateShoppingCart(product));
  };

  return (
    <WrapperHome>
      <Header
        navigate={() => navigate("/shopping-cart")}
        title={"ShoppingCart"}
        logout={() => Logout()}
        countProductsInShoppingCart={productsCount.length}
      />

      <SubHeader
        openFilter={openFilter}
        setOpenFilter={(value: boolean) => setOpenFilter(value)}
        placeholder="Buscar categorias, productos y màs..."
      />

      {openFilter ? <Filter /> : <Carrousel />}

      <ShoppingCart
        titleDestacado="Productos"
        clickButton={(callb: any) => clickButton(callb)}
        categories={categories}
        products={products}
        buy={(product: any) => Buy(product)}
        loading={loading}
      />
    </WrapperHome>
  );
}
