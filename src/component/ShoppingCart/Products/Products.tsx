import { Separator } from "../../Separator/Separator";
import { Wraper } from "../../Wrapper/Wrapper";
import {
  ButtonPay,
  ImageProduct,
  PriceProduct,
  Product,
  SubTitleProduct,
  TitleProduct,
  WrapperButtonPay,
  WrapperInfoProduct,
} from "../Product/Product";

interface Props {
  products?: Array<any>;
  buy?: any;
}

export const Products = (props: Props) => {
  return (
    <Wraper
      background="#0f0f0f"
      flexDirection="row"
      justifyContent="space-around"
      width="100%"
      height="100vh"
      wrap="wrap"
      paddingRight="32px"
    >
      {props.products?.map((product: any) => {
        return (
          <Product key={product.name}>
            <ImageProduct />
            <WrapperInfoProduct>
              <TitleProduct>{product.name}</TitleProduct>
              <Separator height="3" />
              <SubTitleProduct>{"STOCK"}</SubTitleProduct>
              <Separator height="3" />
              <PriceProduct>{product.price}</PriceProduct>
              <Separator height="32" />
              <WrapperButtonPay>
                <ButtonPay onClick={() => props.buy(product)}>
                  <SubTitleProduct>COMPRAR</SubTitleProduct>
                </ButtonPay>
              </WrapperButtonPay>
            </WrapperInfoProduct>
          </Product>
        );
      })}
    </Wraper>
  );
};

export default Products;
