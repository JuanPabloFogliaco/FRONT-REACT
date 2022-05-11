import React, { useEffect, useState } from "react";
import axios from "axios";
import { getToken } from "../utils";
import { useNavigate } from "react-router-dom";
import FormLogin from "../../component/FormLogin/FormLogin";

interface ResponseLogin {
  data: any;
  code: number;
  message: string;
}

export function LoginFeature() {
  const [login, setLogin] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const [response, setResponse] = useState<ResponseLogin>({
    code: 0,
    data: null,
    message: "",
  });

  const onChangeEmail = (email: string) => {
    setLogin({ ...login, email: email });
  };

  const onChangePassword = (password: string) => {
    setLogin({ ...login, password: password });
  };

  const isEmpty = (): boolean => {
    if (login.email !== "" && login.password !== "") {
      console.log(login.email);
      return false;
    } else {
      return true;
    }
  };

  const isValidFormatData = (): boolean => {
    if (isEmail()) {
      return true;
    } else {
      return false;
    }
  };

  const isEmail = () => {
    const emailRegex =
      /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if (emailRegex.test(login.email)) {
      return true;
    } else {
      return false;
    }
  };

  const loginUser = () => {
    if (!isEmpty()) {
      if (isValidFormatData()) {
        return axios
          .post("http://localhost:8080/api/v1/login", {
            email: login.email,
            password: login.password,
          })
          .then((res) => {
            if (res.data.code === 200) {
              localStorage.setItem("token", res.data.data.token);
              localStorage.setItem("refreshToken", res.data.data.refreshToken);
              localStorage.setItem("email", res.data.data.email);
              localStorage.setItem("userRole", res.data.data.userRole);
              setResponse({
                data: res.data.data,
                code: res.data.code,
                message: res.data.message,
              });
              navigate("/");
            } else {
              setResponse({
                data: res.data.data,
                code: res.data.code,
                message: res.data.message,
              });
            }
          })
          .catch((error) => {
            console.log(error);
            console.log("401 PADREE");
          });
      } else {
        setResponse({
          ...response,
          message: "El valo ingresado no corresponde a un email",
        });
      }
    } else {
      setResponse({
        ...response,
        message: "Es necesario cargar el email y password",
      });
    }
  };

  useEffect(() => {
    if (localStorage.length > 0) {
      navigate("/");
    }
  });

  return (
    <FormLogin
      message={response.message}
      onChangeEmail={(text: string) => onChangeEmail(text)}
      onChangePassword={(text: string) => onChangePassword(text)}
      loginUser={() => loginUser()}
    />
  );
}
