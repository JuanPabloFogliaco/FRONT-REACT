import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Carrousel from "../../component/Carrousel/Carrousel";
import Header from "../../component/Header/Header";
import ShoppingCart from "../../component/ShoppingCart/ShoppingCart";
import { Wraper } from "../../component/Wrapper/Wrapper";
import { getToken } from "../utils";
import { productsInShoppingCart, updateShoppingCart } from "./HomeSlice";

interface ResponseLogin {
  data: any;
  code: number;
  message: string;
}

interface Categorie {
  id: number;
  name: string;
}

export function HomeFeature() {
  const dispatch = useAppDispatch();
  const productsCount = useAppSelector(productsInShoppingCart);
  const navigate = useNavigate();
  const [response, setResponse] = useState<ResponseLogin>({
    code: 0,
    data: null,
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    /*  if (getToken() === null) navigate("/login"); */
    /*  const email = localStorage.getItem("email");
    GetUser(email != null ? email : ""); */
    GetCategories();
    GetProducts(1);
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
    const responseGetProducts = await axios.post(
      "https://bx7pv0xv1l.execute-api.us-east-1.amazonaws.com/Prod/api/products",
      { categorieId: categorieId }
    );
    if (!responseGetProducts) return;
    setProducts(responseGetProducts.data);
    setLoading(false);
  };

  const GetCategories = async () => {
    setLoading(true);
    const responseGetCategories = await axios.post(
      "https://bx7pv0xv1l.execute-api.us-east-1.amazonaws.com/Prod/api/categories",
      {}
    );
    if (!responseGetCategories) return;
    setCategories(responseGetCategories.data);
    setLoading(false);
  };

  const Logout = () => {
    localStorage.clear();
  };

  const clickButton = (categorieId: number) => {
    console.log("categorieId", categorieId);
    GetProducts(categorieId);
  };

  const Buy = (product: any) => {
    console.log("product", product);
    dispatch(updateShoppingCart(product));
  };

  return (
    <Wraper
      width="100%"
      background="white"
      height="auto"
      flexDirection="column"
    >
      <Header
        color="black"
        background="#fff"
        height="80px"
        title={"ShoppingCart"}
        logout={() => Logout()}
        countProductsInShoppingCart={productsCount.length}
      />
      <Wraper
        width="100%"
        background="white"
        height="auto"
        justifyContent="center"
        flexDirection="column"
        aligItem="center"
      >
        <Carrousel />

        <ShoppingCart
          clickButton={(callb: any) => clickButton(callb)}
          categories={categories}
          products={products}
          buy={(product: any) => Buy(product)}
          loading={loading}
        />
      </Wraper>
    </Wraper>
  );
}
