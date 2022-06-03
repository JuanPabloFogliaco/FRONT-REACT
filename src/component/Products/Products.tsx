import { ImagenComponent } from "../ImageComponent/Image";
import { Separator } from "../Separator/Separator";
import {
  BtnPayTitle,
  ButtonPay,
  PriceProduct,
  Product,
  SubTitleProduct,
  TitleProduct,
  WrapperButtonPay,
  WrapperInfoProduct,
  WrapperProducts,
} from "./ProductsStyle";

interface Props {
  products?: Array<any>;
  buy?: any;
  img?: any;
}

export const Products = (props: Props) => {
  return (
    <WrapperProducts>
      {props.products?.map((product: any) => {
        return (
          <Product key={product.name}>
            <ImagenComponent width={"100%"} height={"54%"} src={props.img} />
            <WrapperInfoProduct>
              <TitleProduct>{product.name}</TitleProduct>
              <Separator height="3" />
              <SubTitleProduct>{"STOCK"}</SubTitleProduct>
              <Separator height="3" />
              <PriceProduct>$ {product.price}</PriceProduct>
              <Separator height="32" />
              <WrapperButtonPay>
                <ButtonPay onClick={() => props.buy(product)}>
                  <BtnPayTitle color="#fff">COMPRAR</BtnPayTitle>
                </ButtonPay>
              </WrapperButtonPay>
            </WrapperInfoProduct>
          </Product>
        );
      })}
    </WrapperProducts>
  );
};

export default Products;
