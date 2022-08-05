import axios from "axios";
import { URL_BASE } from "../enviroment";

export const LoginAPI = async (email: string, password: string) => {
  let responseLogin;
  try {
    responseLogin = await axios.post(`${URL_BASE}login`, { email, password });

    if (responseLogin.data.code === 200) {
      localStorage.setItem("token", responseLogin.data.data.token);
      localStorage.setItem(
        "refreshToken",
        responseLogin.data.data.refreshToken,
      );
      localStorage.setItem("email", responseLogin.data.data.email);
      localStorage.setItem("userRole", responseLogin.data.data.userRole);
    } else {
      return responseLogin.data.code;
    }
    return Promise.resolve(responseLogin.data);
  } catch (error) {
    return error;
  }
};

export const RegisterAPI = async (
  name: string,
  email: string,
  password: string,
) => {
  axios
    .post("http://localhost:8080/api/v1/register", {
      name,
      email,
      password,
    })
    .then((res) => {
      if (res.data.code === 200) {
        return Promise.resolve("creado con exito");
        /*  setResponse({
          code: res.data.code,
          data: res.data.data,
          message: res.data.message,
        }); */
        /*   navigate("/login"); */
      }
      /*  setResponse({
        code: res.data.code,
        data: res.data.data,
        message: res.data.message,
      }); */
      return Promise.resolve(res.data.message);
    });
};
