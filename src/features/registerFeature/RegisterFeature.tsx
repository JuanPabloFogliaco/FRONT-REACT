import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getToken } from "../utils";
import FormRegister from "../../component/FormRegister/FormRegister";
import { RegisterSync } from "../../redux-slices/RegisterSlice";
import { useAppDispatch } from "../../app/hooks";

interface ResponseRegister {
  data: any;
  code: number;
  message: string;
}

export function RegisterFeature() {
  const dispatch = useAppDispatch();

  const [register, setRegister] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [response, setResponse] = useState<ResponseRegister>({
    code: 0,
    data: null,
    message: "",
  });

  const navigate = useNavigate();

  const onChangeName = (name: string) => {
    setRegister({ ...register, name: name });
  };

  const onChangeEmail = (email: string) => {
    setRegister({ ...register, email: email });
  };

  const onChangePassword = (password: string) => {
    setRegister({ ...register, password: password });
  };

  const isEmpty = (): boolean => {
    if (register.email !== "" && register.password !== "") {
      console.log(register.email);
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

    if (emailRegex.test(register.email)) {
      return true;
    } else {
      return false;
    }
  };

  const registerUser = async () => {
    if (!isEmpty()) {
      if (isValidFormatData()) {
        await dispatch(
          RegisterSync({
            name: register.name,
            email: register.email,
            password: register.password,
          })
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
    if (getToken() !== null) navigate("/");
  });

  return (
    <FormRegister
      onChangePassword={(password: string) => {
        onChangePassword(password);
      }}
      onChangeEmail={(email: string) => onChangeEmail(email)}
      onChangeName={(name: string) => {
        onChangeName(name);
      }}
      message={response.message}
      registerUser={() => registerUser()}
      key={"formRegister"}
    />
  );
}
