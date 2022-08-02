import {
  Product,
  productsInShoppingCart,
  totalPayInShoppingCart,
  descreaseToShoppingCart,
  addToShoppingCart,
  removeFromShoppingCart,
} from "../../redux-slices/ShoppingCartSlice";
import { Separator } from "../../component/Separator/Separator";
import {
  ButtonDetail,
  Content,
  ContentDetail,
  ControlerCount,
  Count,
  DeleteWrapper,
  FooterButtons,
  HeaderDetail,
  RowDetail,
  TitleDetail,
  TitleDownload,
  WrapperDetail,
  WrapperDetailProducts,
  WrapperTitle,
} from "./DetailShoppingCartStyle";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useNavigate } from "react-router-dom";
import { ImagenComponent } from "../../component/ImageComponent/Image";

const imgFlecha = require("../../styleSheets/images/flecha-izquierda.png");
const imgPdf = require("../../styleSheets/images/pdf.png");
const imgBorrar = require("../../styleSheets/images/delete.png");

export const DetailShoppingCart = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const productsInShopping = useAppSelector(productsInShoppingCart);
  const totalPay = useAppSelector(totalPayInShoppingCart);

  const renderMapProducts = () => {
    if (!productsInShopping || productsInShopping.length === 0) {
      return <TitleDetail>No hay productos.</TitleDetail>;
    }

    return productsInShopping.map((product: Product) => {
      return (
        <>
          <ContentDetail>
            <DeleteWrapper>
              <ImagenComponent
                width="15px"
                height="15px"
                onClick={() => dispatch(removeFromShoppingCart(product))}
                src={imgBorrar}
              />
            </DeleteWrapper>
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
              <ControlerCount>
                <Count
                  onClick={() => dispatch(descreaseToShoppingCart(product))}
                >
                  -
                </Count>
                <TitleDetail>{product.totalQuantity}</TitleDetail>
                <Count onClick={() => dispatch(addToShoppingCart(product))}>
                  {" "}
                  +{" "}
                </Count>
              </ControlerCount>
            </RowDetail>
          </ContentDetail>
          <Separator height="20" width="100" />
        </>
      );
    });
  };

  return (
    <WrapperDetail>
      <HeaderDetail>
        <TitleDetail>
          <ImagenComponent onClick={() => navigate("/")} src={imgFlecha} />
        </TitleDetail>
        <TitleDetail>ShoppingCart</TitleDetail>
      </HeaderDetail>
      <Content>
        <WrapperTitle>
          <TitleDetail> Presupuesto </TitleDetail>
        </WrapperTitle>
        <WrapperDetailProducts>{renderMapProducts()}</WrapperDetailProducts>
      </Content>
      <FooterButtons>
        <Separator height="10" />
        <TitleDetail>Total a pagar: ${totalPay}</TitleDetail>
        <Separator height="10" />
        <TitleDownload>
          {" "}
          <ImagenComponent onClick={() => navigate("/")} src={imgPdf} />{" "}
          Descargar Presupuesto
        </TitleDownload>
        <Separator height="20" />
        <ButtonDetail>Pagar</ButtonDetail>
        <Separator height="20" />
      </FooterButtons>
    </WrapperDetail>
  );
};
