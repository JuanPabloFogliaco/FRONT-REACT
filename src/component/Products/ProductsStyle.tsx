import React from "react";

import styled from "styled-components";

export const WrapperProducts = styled.div`
  display: flex;
  background: whitesmoke;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  height: auto;
  flex-wrap: wrap;
  top: 100;
  align-items: center;
  @media only screen and (max-width: 400px) {
    justify-content: center;
  }
`;

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

export const ImageProduct = styled.img`
  width: 100%;
  height: 55%;
  background-image: url("../images/cemento.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

export const WrapperInfoProduct = styled.div`
  height: 37%;
  background-color: #e1e1e1;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  padding: 12px;
`;

export const TitleProduct = styled.div`
  color: #000000;
  font-size: 16px;
  font-weight: bold;
`;

export const SubTitleProduct = styled.div`
  color: #0b0909;
  font-size: 12px;
  font-weight: 400;
`;

export const PriceProduct = styled.div`
  color: #0b0909;
  font-size: 16px;
  font-weight: 700;
`;

export const BtnPayTitle = styled.div`
  color: #ffffff;
  font-size: 14px;
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
  background: #3c3c3c;
  color: #ffffff;
  box-shadow: black 0px 0px 11px;
  border: 0px;
  :hover {
    background-color: #d12f2a;
  }
`;
