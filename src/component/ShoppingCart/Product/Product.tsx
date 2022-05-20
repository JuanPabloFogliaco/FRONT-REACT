import React from "react";

import styled from "styled-components";

export const Product = styled.div`
  width: 210px;
  height: 300px;
  background-color: white;
  box-shadow: black 0px 0px 11px;
  border-radius: 12px;
  margin: 5px;
  @media only screen and (max-width: 647px) {
    width: 45%;
  }
  @media only screen and (max-width: 519px) {
    width: 100%;
  }
  @media only screen and (max-width: 519px) {
    width: 80%;
    justify-content: center;
    align-items: center;
  }
`;

export const ImageProduct = styled.div`
  width: 100%;
  height: 55%;
  background-image: url("../image/cemento.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

export const WrapperInfoProduct = styled.div`
  height: 37%;
  background-color: black;
  opacity: 0.7;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  padding: 12px;
`;

export const TitleProduct = styled.div`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

export const SubTitleProduct = styled.div`
  color: white;
  font-size: 12px;
  font-weight: 400;
`;

export const PriceProduct = styled.div`
  color: white;
  font-size: 16px;
  font-weight: 700;
`;

export const WrapperButtonPay = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const ButtonPay = styled.button`
  border-radius: 5px;
  width: 120px;
  height: 25px;
  background: #ad3245;
  color: "#e6bfc5";
  box-shadow: black 0px 0px 11px;
  border: 0px;
  :hover {
    background-color: #d12f2a;
  }
`;

export const WraperPoducts = styled.div`
  background: ${(props: Props) =>
    props.background ? props.background : "#0f0f0f"};
  width: ${(props: Props) => (props.width ? props.width : "100%")};
  height: ${(props: Props) => (props.height ? props.height : "100vh")};
  display: flex;
  flex-direction: ${(props: Props) =>
    props.flexDirection ? props.flexDirection : "column"};
  justify-content: ${(props: Props) =>
    props.justifyContent ? props.justifyContent : "flex-start"};
  align-items: ${(props: Props) =>
    props.aligItem ? props.aligItem : "center"};
  padding: ${(props: Props) => (props.padding ? props.padding : "0px")};
  top: ${(props: Props) => (props.top ? props.top : "center")};
  padding-left: ${(props: Props) =>
    props.paddingLeft ? props.paddingLeft : "0px"};
  flex-wrap: ${(props: Props) => (props.wrap ? props.wrap : "")};
  padding-right: ${(props: Props) =>
    props.paddingRight ? props.paddingRight : "0px"};
  position: ${(props: Props) => (props.position ? props.position : "0px")};
  padding-top: ${(props: Props) =>
    props.paddingTop ? props.paddingTop : "0px"};
     @media only screen and (max-width: 519px) {
    width:100%;
    justify-content: center;
    align-items: center;
  }
`;

interface Props {
  justifyContent?: string;
  aligItem?: string;
  flexDirection?: string;
  padding?: string;
  top?: string;
  background?: string;
  height?: string;
  paddingLeft?: string;
  width?: string;
  wrap?: string;
  paddingRight?: string;
  position?: string;
  paddingTop?: string;
}
