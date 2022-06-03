import React from "react";

import styled from "styled-components";

export const WrapperHeader = styled.div`
  display: flex;
  width: "100%";
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  height: "60px";
  color: black;
  box-shadow: "1px 5px 15px -3px rgba(0, 0, 0, 0.32)";
  padding-right: 20px ;
`;

export const TitleHeader = styled.div`
  width: 100%;
  color: black;
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 800;
  padding: 0px;
  cursor: pointer;
  padding-left: 20px;
`;

export const KeyPadsHeader = styled.div`
  display: flex;
  flex-direction: row;
  width: 100px;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  background: white;
  cursor: pointer;
`;

export const CountShoppingCart = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: center;
  align-items: center;
  background: white;
  cursor: pointer;
  padding: 10px ;
`;

export const TitleCountShoppingCart = styled.div`
  width: 100%;
  color: black;
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 800;
  padding: 0px;
  cursor: pointer;
`;
