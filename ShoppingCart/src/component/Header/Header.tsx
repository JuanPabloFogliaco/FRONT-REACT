import { ImagenComponent } from "../ImageComponent/Image";
import { Title } from "../Title/Title";
import { Wraper } from "../Wrapper/Wrapper";

const imag1 = require("../../styleSheets/images/shopping-cart.png");

interface Props {
  background: string;
  height: string;
  logout: any;
  title: string;
  color?: string;
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
        justifyContent="space-around"
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
          1
          <ImagenComponent src={imag1} />
        </Wraper>

        <Title
          color={props.color}
          cursor="pointer"
          onClick={() => props.logout()}
          padding={"20px"}
        >
          Cerrar sesion
        </Title>
      </Wraper>
    </Wraper>
  );
};

export default Header;
