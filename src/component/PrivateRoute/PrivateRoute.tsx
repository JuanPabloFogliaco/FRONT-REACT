import { Route, Routes } from "react-router-dom";
import { DetailShoppingCart } from "../../features/detailShoppingCartFeature/DetailShoppingCartFeature";
import { HomeFeature } from "../../features/homeFeature/HomeFeature";

export const PrivateRoute = () => {
  const token = localStorage.getItem("token");

  if (token === null) return <></>;
  
  return (
    <Routes>
      <Route path="/" element={<HomeFeature />} />
      <Route path="/shopping-cart" element={<DetailShoppingCart />} />
    </Routes>
  );
};

export default PrivateRoute;
