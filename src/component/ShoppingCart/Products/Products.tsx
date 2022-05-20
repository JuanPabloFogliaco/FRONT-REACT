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
  WraperPoducts
} from "../Product/Product";

interface Props {
  products?: Array<any>;
  buy?: any;
}

export const Products = (props: Props) => {
  return (
    <WraperPoducts
      background="#0f0f0f"
      flexDirection="row"
      justifyContent="flex-start"
      width="100%"
      height="auto"
      wrap="wrap"
      top={"100"}
      aligItem="flex-start"
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
              <PriceProduct>$ {product.price}</PriceProduct>
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
    </WraperPoducts>
  );
};

export default Products;
