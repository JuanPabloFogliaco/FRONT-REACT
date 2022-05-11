import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getToken } from "../utils";
import FormRegister from "../../component/FormRegister/FormRegister";

interface ResponseRegister {
  data: any;
  code: number;
  message: string;
}

export function RegisterFeature() {
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

  const registerUser = () => {
    axios
      .post("http://localhost:8080/api/v1/register", {
        name: register.name,
        email: register.email,
        password: register.password,
      })
      .then((res) => {
        if (res.data.code === 200) {
          setResponse({
            code: res.data.code,
            data: res.data.data,
            message: res.data.message,
          });
          navigate("/login");
        }
        setResponse({
          code: res.data.code,
          data: res.data.data,
          message: res.data.message,
        });
      });
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
