import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { HomeFeature } from "./features/homeFeature/HomeFeature";
import { LoginFeature } from "./features/loginFeature/LoginFeature";
import { RegisterFeature } from "./features/registerFeature/RegisterFeature";
import { DetailShoppingCart } from "./features/detailShoppingCartFeature/DetailShoppingCartFeature";
import "./styles/App.css";
import Loading from "./component/Loading/Loading";
import PrivateRoute from "./component/PrivateRoute/PrivateRoute";

function App() {
  const [loading, setLoading] = useState(true);
  const defaultConfig = {
    baseUrl: "http://localhost:8080/api/v1/",
    headers: {
      "Content-Type": "application/json",
      Acept: "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*",
    },
  };
  const token = localStorage.getItem("token");
  const refreshtoken = localStorage.getItem("refreshToken");
  const email = localStorage.getItem("email");

  function addRequestInterceptorAndDefaults() {
    return axios.interceptors.request.use(
      (config) => {
        config.headers = defaultConfig.headers;
        config.baseURL = defaultConfig.baseUrl;
        const access_token = localStorage.getItem("token");
        if (access_token !== null) {
          config.headers = {
            ...config.headers,
            Authorization: "Bearer " + access_token,
          };
        }
        return config;
      },
      (error) => {
        Promise.reject(error);
      }
    );
  }

  function addResponseInterceptor() {
    return axios.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalConfig = error.config;
        if (error.response) {
          if (error.response.status === 401 && !originalConfig._retry) {
            if (error.response.status === 404) {
              console.log("404!!!!!!!!!!!!!");
            }

            const rf = await axios.post("refresh-token", {
              email: email,
              refreshToken: refreshtoken,
            });
            if (rf != undefined) {
              originalConfig._retry = true;
              localStorage.setItem("token", rf.data);
            }
          }
          if (error.response.status === "ANOTHER_STATUS_CODE") {
            // Do something
            return Promise.reject(error.response.data);
          }
        }
        return Promise.reject(error);
      }
    );
  }

  useEffect(() => {
    addRequestInterceptorAndDefaults();
    addResponseInterceptor();
    setLoading(false);
  }, [token]);

  return loading ? (
    <Loading />
  ) : (
    <div className="App">
      <Routes>
        <Route path="/register" element={<RegisterFeature />} />
        <Route path="/login" element={<LoginFeature />} />
        <Route path="/" element={<HomeFeature />} />
        <Route path="/shopping-cart" element={<DetailShoppingCart />} />
        <PrivateRoute />
      </Routes>
    </div>
  );
}

export default App;
