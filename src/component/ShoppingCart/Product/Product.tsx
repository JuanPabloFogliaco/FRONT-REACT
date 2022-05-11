import React from "react";

import styled from "styled-components";

export const Product = styled.div`
  width: 210px;
  height: 300px;
  background-color: white;
  box-shadow: black 0px 0px 11px;
  border-radius: 12px;
  margin: 5px;
  @media only screen and (max-width: 565px) {
    width: 100%;
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
  width: 50%;
  height: 25px;
  background: #ad3245;
  color: "#e6bfc5";
  box-shadow: black 0px 0px 11px;
  border: 0px;
  :hover {
    background-color: #d12f2a;
  }
`;
