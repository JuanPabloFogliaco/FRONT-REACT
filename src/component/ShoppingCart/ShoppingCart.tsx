import { Button } from "../Button/Button";
import { SideBar } from "./SideBar/SideBar";
import { Title } from "../Title/Title";
import { Wraper } from "../Wrapper/Wrapper";
import Products from "./Products/Products";
import { useState } from "react";
import { TitleDestacadoC } from "../TitleDestacado/TitleDestacado";
import { Separator } from "../Separator/Separator";
import ReactLoading from "react-loading";
import { SideBarMobile } from "./SideBar/SideBarMobile";
import { ButtonOpenSideBarMobile } from "./SideBar/ButtonOpenSideBarMobile";
interface Props {
  categories?: Array<any>;
  products?: Array<any>;
  clickButton?: any;
  buy?: any;
  loading?: boolean;
}

interface ShoppingCart {
  totalPay: number;
  products: Array<any>;
}

export const ShoppingCart = (props: Props) => {
  const [active, setActive] = useState(1);
  const [shoppingCart, setShoppingCart] = useState<ShoppingCart>({
    totalPay: 0,
    products: [],
  });
  const [openSideBarMobile, setOpenSideBarMobile] = useState(false);

  const clickButton = (categorie: any) => {
    setActive(categorie.id);
    props.clickButton(categorie.id);
  };

  const renderButtons = () => {
    return props.categories?.map((categorie: any) => {
      return (
        <>
          <Button
            key={categorie.id}
            active={active === categorie.id ? true : false}
            background="#dedede"
            onClick={() => clickButton(categorie)}
          >
            <Title
              key={categorie.name}
              color={active === categorie.id ? "#fff" : "black"}
            >
              {categorie.name}
            </Title>
          </Button>
          <Separator height="25" />
        </>
      );
    });
  };

  const buy = (product: any) => {
    props.buy(product);
    setShoppingCart({
      ...shoppingCart,
      totalPay: product.price + shoppingCart.totalPay,
      products: [...shoppingCart.products, product],
    });
  };

  return (
    <Wraper
      width="100%"
      height="auto"
      flexDirection="column"
      aligItem="flex-start"
      justifyContent="center"
      position="relative"
    >
      <Wraper
        height="100%"
        flexDirection="row"
        justifyContent="flex-start"
        aligItem="center"
      >
        <TitleDestacadoC />
        <ButtonOpenSideBarMobile
          onClick={() => setOpenSideBarMobile(!openSideBarMobile)}
        >
         open filtro/menu
        </ButtonOpenSideBarMobile>
      </Wraper>

      <Wraper
        flexDirection="row"
        width="100%"
        height="100%"
        padding="0px"
        justifyContent="flex-start"
        aligItem="left"
      >
        <SideBar alignItems="left" justifyContent="flex-start">
          {renderButtons()}
        </SideBar>
        {openSideBarMobile && <SideBarMobile>{renderButtons()}</SideBarMobile>}
        {props.loading ? (
          <Wraper
            width="100%"
            height="600px"
            justifyContent="center"
            aligItem="center"
          >
            <ReactLoading
              type={"spinningBubbles"}
              color={"#ad3245"}
              height={67}
              width={75}
            />
          </Wraper>
        ) : (
          <Products
            buy={(productPrice: number) => buy(productPrice)}
            products={props.products}
          />
        )}
      </Wraper>
    </Wraper>
  );
};

export default ShoppingCart;
