import { useNavigate } from "react-router-dom";
import { ButtonOutline } from "../ButtonOutline/ButtonOutline";
import { Error } from "../Error/Error";
import Header from "../Header/Header";
import { Separator } from "../Separator/Separator";
import { Title } from "../Title/Title";
import {
  CardForm,
  FormFooter,
  FormLoginWrapper,
  Input,
  InputGroup,
  TitleForm,
} from "./FormLoginStyle";

interface FormLoginI {
  message: string;
  onChangeEmail: any;
  onChangePassword: any;
  loginUser: any;
}

const FormLogin = (props: FormLoginI) => {
  const navigate = useNavigate();

  return (
    <FormLoginWrapper>
      <Header
        navigate={() => navigate("/shopping-cart")}
        title={"ShoppingCart"}
        logout={() => {}}
        countProductsInShoppingCart={0}
      />
      <Separator height="50" width="100" />
      <CardForm>
        <InputGroup>
          <TitleForm>Email</TitleForm>
          <Input
            required
            type={"email"}
            onChange={(text) => props.onChangeEmail(text.target.value)}
          />
        </InputGroup>
        <InputGroup>
          <TitleForm>Password</TitleForm>
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
          <TitleForm onClick={() => navigate("/register")} color="#868686">
            ¿Quieres registrarte?
          </TitleForm>
          <Separator width="20" />
          <ButtonOutline onClick={() => props.loginUser()}>
            <TitleForm color="#ffffff">Iniciar Sesion</TitleForm>
          </ButtonOutline>
        </FormFooter>
      </CardForm>
    </FormLoginWrapper>
  );
};

export default FormLogin;
