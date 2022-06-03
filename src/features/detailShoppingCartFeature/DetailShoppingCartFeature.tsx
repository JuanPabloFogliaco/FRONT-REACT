import { Product } from "../homeFeature/HomeSlice";
import { Separator } from "../../component/Separator/Separator";
import { Wraper } from "../../component/Wrapper/Wrapper";
import { Button } from "../../component/Button/Button";
import {
  ContentDetail,
  RowDetail,
  TitleDetail,
  WrapperDetail,
  WrapperDetailProducts,
} from "./DetailShoppingCartStyle";
import { deleteDuplicate } from "../utils";

class Props {
  productsInShoppingCart?: Array<any>;
  totalPay?: number;
}

export const DetailShoppingCart = (props: Props) => {
  const renderMapProducts = () => {
    if (!props.productsInShoppingCart) return <>ASD</>;
    const products = deleteDuplicate(props.productsInShoppingCart);

    return products?.map((product: Product) => {
      const count = props.productsInShoppingCart?.filter(
        (p: any) => p.id === product.id
      );

      return (
        <WrapperDetailProducts>
          <ContentDetail>
            <RowDetail>
              <TitleDetail>NOMBRE: </TitleDetail>
              <TitleDetail>{product && product?.name}</TitleDetail>
            </RowDetail>
            <RowDetail>
              <TitleDetail>PRECIO: </TitleDetail>
              <TitleDetail>$ {product && product?.price}</TitleDetail>
            </RowDetail>
            <RowDetail>
              <TitleDetail>CANTIDAD: </TitleDetail>
              <TitleDetail>{count?.length}</TitleDetail>
            </RowDetail>
            <Wraper
              flexDirection="row"
              width="100%"
              height="auto"
              background="white"
              aligItem="center"
              justifyContent="space-around"
              wrap="wrap"
              paddingTop="10px"
            >
              <Button>Eliminar</Button>

              <Button>Editar</Button>
            </Wraper>
          </ContentDetail>
          <Separator width="100%" height="250" />
        </WrapperDetailProducts>
      );
    });
  };

  return (
    <WrapperDetail>
      {renderMapProducts()}
      <TitleDetail>Total a pagar: ${props.totalPay}</TitleDetail>
      <Button color="white">Pagar</Button>
    </WrapperDetail>
  );
};
