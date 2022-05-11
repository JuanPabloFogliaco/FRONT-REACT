import { Button } from "../Button/Button";
import { SideBar } from "./SideBar/SideBar";
import { Title } from "../Title/Title";
import { Wraper } from "../Wrapper/Wrapper";
import Products from "./Products/Products";
import { useState } from "react";

interface Props {
  categories?: Array<any>;
  products?: Array<any>;
  clickButton?: any;
  buy?: any;
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

  const clickButton = (categorie: any) => {
    setActive(categorie.id);
    props.clickButton(categorie.id);
  };

  const renderButtons = () => {
    return props.categories?.map((categorie: any) => {
      return (
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
      flexDirection="column"
      aligItem="flex-start"
      justifyContent="center"
    >
      <Wraper flexDirection="row" justifyContent="flex-start" aligItem="center">
        <Wraper
          flexDirection="row"
          width="100%"
          height="100px"
          justifyContent="flex-start"
          aligItem="center"
        >
          <Title paddingLeft="32px" color="#fff">
            PRODUCTOS DESTACADOS -
          </Title>
          <Title color="#fff"> CONSTRUCCION</Title>
        </Wraper>
      </Wraper>
      <Title color="#fff">TOTAL {shoppingCart.totalPay}</Title>
      <Title color="#fff">TOTAL {JSON.stringify(shoppingCart.products)}</Title>
      <Wraper flexDirection="row" width="100%" height="100vh" padding="0px">
        <SideBar alignItems="center" justifyContent="space-around">
          {renderButtons()}
        </SideBar>
        <Products
          buy={(productPrice: number) => buy(productPrice)}
          products={props.products}
        />
      </Wraper>
    </Wraper>
  );
};

export default ShoppingCart;
