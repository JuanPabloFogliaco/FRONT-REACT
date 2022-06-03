import { Button } from "../../../component/Button/Button";
import { Title } from "../../../component/Title/Title";
import { useState } from "react";
import { Separator } from "../../../component/Separator/Separator";

import {
  ContentShoppingCart,
  ContentTitleOutstanding,
  SideBar,
  SideBarMobile,
  TitleOutstanding,
  WrapperShoppingCart,
  WrapperTitleOutstanding,
} from "./ShoppingCartStyle";
import Loading from "../../../component/Loading/Loading";
import { Products } from "../../../component/Products/Products";
interface Props {
  categories?: Array<any>;
  products?: Array<any>;
  clickButton?: any;
  buy?: any;
  loading?: boolean;
  titleDestacado: string;
}

interface ShoppingCartI {
  totalPay: number;
  products: Array<any>;
}

const cementoImg = require("../../../styleSheets/images/cemento.png");

export const ShoppingCartFeature = (props: Props) => {
  const [active, setActive] = useState(1);
  const [shoppingCart, setShoppingCart] = useState<ShoppingCartI>({
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
    <WrapperShoppingCart>
      <WrapperTitleOutstanding>
        <ContentTitleOutstanding>
          <TitleOutstanding>{props.titleDestacado}</TitleOutstanding>
        </ContentTitleOutstanding>
      </WrapperTitleOutstanding>

      <ContentShoppingCart>
        <SideBar>{renderButtons()}</SideBar>
        {openSideBarMobile && <SideBarMobile>{renderButtons()}</SideBarMobile>}
        {props.loading ? (
          <Loading />
        ) : (
          <Products
            img={cementoImg}
            buy={(productPrice: number) => buy(productPrice)}
            products={props.products}
          />
        )}
      </ContentShoppingCart>
    </WrapperShoppingCart>
  );
};

export default ShoppingCartFeature;
