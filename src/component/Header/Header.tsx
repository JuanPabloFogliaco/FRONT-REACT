import { ImagenComponent } from "../ImageComponent/Image";
import {
  CountShoppingCart,
  KeyPadsHeader,
  TitleCountShoppingCart,
  TitleHeader,
  WrapperHeader,
} from "./HeaderStyle";

const imag1 = require("../../styleSheets/images/shopping-cart.png");
const accountUser = require("../../styleSheets/images/usuario.png");
interface Props {
  logout: any;
  title: string;
  countProductsInShoppingCart: number;
  navigate?: any;
}

export const Header = (props: Props) => {
  return (
    <WrapperHeader>
      <TitleHeader>{props.title}</TitleHeader>
      <KeyPadsHeader>
        <CountShoppingCart onClick={() => props.navigate()}>
          <TitleCountShoppingCart>
            {props.countProductsInShoppingCart}
          </TitleCountShoppingCart>
          <ImagenComponent src={imag1} />
        </CountShoppingCart>
        <ImagenComponent onClick={() => props.logout()} src={accountUser} />
      </KeyPadsHeader>
    </WrapperHeader>
  );
};

export default Header;
