import { ImagenComponent } from "../ImageComponent/Image";
import { Separator } from "../Separator/Separator";
import { Title } from "../Title/Title";
import { Wraper } from "../Wrapper/Wrapper";

const imag1 = require("../../styleSheets/images/shopping-cart.png");
const accountUser = require("../../styleSheets/images/usuario.png");
interface Props {
  background: string;
  height: string;
  logout: any;
  title: string;
  color?: string;
  countProductsInShoppingCart: number;
}

export const Header = (props: Props) => {
  return (
    <Wraper
      flexDirection="row"
      justifyContent="space-between"
      aligItem="center"
      background={props.background}
      height={props.height}
    >
      <Title size={16} paddingLeft={"20px"} color={props.color}>
        {props.title}
      </Title>
      <Wraper
        flexDirection="row"
        width="200px"
        justifyContent="flex-end"
        aligItem="center"
        background="white"
      >
        <Wraper
          flexDirection="row"
          width="auto"
          justifyContent="center"
          aligItem="center"
          background="white"
        >
          <Title size={16} paddingLeft={"0px"} color={props.color}>
            {props.countProductsInShoppingCart}
          </Title>
          <Separator width={"5"} />
          <ImagenComponent src={imag1} />
          <Separator width={"15"} />
        </Wraper>
        <ImagenComponent onClick={() => props.logout()} src={accountUser} />
        <Separator width={"15"} />
      </Wraper>
    </Wraper>
  );
};

export default Header;
