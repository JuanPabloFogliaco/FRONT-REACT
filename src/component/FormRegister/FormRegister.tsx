import react from "react";
import { useNavigate } from "react-router-dom";
import { ButtonOutline } from "../ButtonOutline/ButtonOutline";
import { Error } from "../Error/Error";
import { ContainterFooter, FormFooter } from "../FormLogin/FormLoginStyle";
import Header from "../Header/Header";
import { Input, InputGroup } from "../Input/Input";
import { Separator } from "../Separator/Separator";
import { Title } from "../Title/Title";
import { CardForm, FormRegisterWrapper } from "./FormRegisterStyle";

interface FormRegisterI {
  message: string;
  onChangeEmail: any;
  onChangePassword: any;
  onChangeName: any;
  registerUser: any;
}

const FormRegister = (props: FormRegisterI) => {
  const navigate = useNavigate();

  return (
    <FormRegisterWrapper>
      <Header
        navigate={() => navigate("/shopping-cart")}
        title={"ShoppingCart"}
        logout={() => {}}
        countProductsInShoppingCart={0}
      />
      <Separator />
      <CardForm>
        <InputGroup>
          <Title>Name</Title>
          <Input
            required
            type={"text"}
            onChange={(text) => props.onChangeName(text.target.value)}
          />
        </InputGroup>
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
        <FormFooter>
          <ContainterFooter>
          
              <Title onClick={() => navigate("/login")} color="#868686">¿Quieres iniciar sesion?</Title>
           
            <Separator width="7" height="10" />
            <ButtonOutline onClick={() => props.registerUser()}>
              <Title color="#ffffff">Registrar</Title>
            </ButtonOutline>
          </ContainterFooter>
        </FormFooter>
      </CardForm>
    </FormRegisterWrapper>
  );
};

export default FormRegister;
