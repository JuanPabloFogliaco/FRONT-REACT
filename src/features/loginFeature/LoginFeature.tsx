import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import FormLogin from "../../component/FormLogin/FormLogin";
import { LoginSync } from "../../redux-slices/LoginSlice";

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
  const dispatch = useAppDispatch();

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

  const loginUser = async () => {
    if (!isEmpty()) {
      if (isValidFormatData()) {
        await dispatch(
          LoginSync({ email: login.email, password: login.password })
        );
        navigate("/");
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
  /*   if (localStorage.getItem("token") !== null) {
      navigate("/");
    } */
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
