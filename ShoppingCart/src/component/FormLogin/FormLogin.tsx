import react from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button/Button";
import { ButtonOutline } from "../ButtonOutline/ButtonOutline";
import { Card, CardFooter } from "../Card/Card";
import { Error } from "../Error/Error";
import { Input, InputGroup } from "../Input/Input";
import { Separator } from "../Separator/Separator";
import { Title } from "../Title/Title";
import { Wraper } from "../Wrapper/Wrapper";

interface FormLoginI {
  message: string;
  onChangeEmail: any;
  onChangePassword: any;
  loginUser: any;
}

const FormLogin = (props: FormLoginI) => {
  const navigate = useNavigate();

  return (
    <Wraper>
      <Separator />
      <Title color="#f1f1f1" size={21}>
        INICIAR SESION
      </Title>
      <Separator />
      <Card padding="16px">
        <InputGroup>
          <Title>Email</Title>
          <Input
            required
            type={"email"}
            onChange={(text) => props.onChangeEmail(text.target.value)}
          />
        </InputGroup>
        <InputGroup>
          <Title>Password</Title>
          <Input
            required
            type={"password"}
            onChange={(text) => props.onChangePassword(text.target.value)}
          />
        </InputGroup>
        <Separator />
        <Error>{props.message}</Error>
        <Separator />
        <CardFooter>
          <ButtonOutline type="button" onClick={() => navigate("/register")}>
            <Title color="#070000">Registrarme</Title>
          </ButtonOutline>
          <Separator width="30" height="0" />
          <Button type="button" onClick={() => props.loginUser()}>
            <Title color="#f1f1f1">Ingresar</Title>
          </Button>
        </CardFooter>
      </Card>
    </Wraper>
  );
};

export default FormLogin;
