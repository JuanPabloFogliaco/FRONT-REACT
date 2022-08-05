import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Carrousel from "../../component/Carrousel/Carrousel";
import { Footer } from "../../component/Footer/Footer";
import Header from "../../component/Header/Header";
import ShoppingCart from "../../component/shoppingCart/ShoppingCart";
import Filter from "../../component/SubHeader/Filter/Filter";
import SubHeader from "../../component/SubHeader/SubHeader";
import {
  addToShoppingCart,
  getCategories,
  GetCategoriesSync,
  getLoading,
  getProducts,
  GetProductsSync,
  setLoading,
  totalQuantityInShoppingCart,
} from "../../redux-slices/ShoppingCartSlice";
import { getToken } from "../utils";
import { HeaderFixed, WrapperHome } from "./HomeStyle";

export function HomeFeature() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const categories = useAppSelector(getCategories);
  const products = useAppSelector(getProducts);
  const loadingStatus = useAppSelector(getLoading);
  const totalQuantity = useAppSelector(totalQuantityInShoppingCart);

  const [openFilter, setOpenFilter] = useState(false);


  const Logout = () => {
    localStorage.clear();
  };

  const clickButtonCategorie = async (categorieId: number) => {
    await dispatch(GetProductsSync(categorieId));
  };

  const Buy = (product: any) => {
    dispatch(addToShoppingCart(product));
  };

  useEffect(() => {
    /*  if (getToken() === null) navigate("/login"); */
   // (async () => {
   //   await 
   // })()
 
 
   dispatch(setLoading);
   dispatch(GetCategoriesSync());
   dispatch(GetProductsSync(1));
   }, [dispatch]);

  return (
    <WrapperHome>
      <HeaderFixed>
        <Header
          navigate={() => navigate("/shopping-cart")}
          title={"ShoppingCart"}
          logout={() => Logout()}
          countProductsInShoppingCart={totalQuantity}
        />

        <SubHeader
          openFilter={openFilter}
          setOpenFilter={(value: boolean) => setOpenFilter(value)}
          placeholder="Buscar categorias, productos y màs..."
        />
      </HeaderFixed>

      {openFilter ? <Filter /> : <Carrousel />}

      <ShoppingCart
        titleDestacado="Productos"
        clickButton={(callb: any) => clickButtonCategorie(callb)}
        categories={categories}
        products={products}
        buy={(product: any) => Buy(product)}
        loading={loadingStatus}
      />
      <Footer />
    </WrapperHome>
  );
}
