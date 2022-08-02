import React from "react";

import styled from "styled-components";

export const WrapperShoppingCart = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const WrapperTitleOutstanding = styled.div`
  width: 100%;
  height: auto;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #f5f5f5;
`;

export const ContentTitleOutstanding = styled.div`
  width: 100%;
  height: 10%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background: whitesmoke;
`;

export const TitleOutstanding = styled.div`
  font-size: 16px;
  color: #000000;
  text-align: left;
  padding-left: 30px;
  padding: 20px;
`;

export const ContentShoppingCart = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  padding: 0px;
  justify-content: flex-start;
  align-items: flex-start;
  align-items: left;
  background: whitesmoke;
`;

export const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: auto;
  align-items: left;
  justify-content: flex-start;
  padding-left: 32px;
  padding-right: 32px;
  @media (max-width: 400px) {
    display: none;
  }
`;

export const SideBarMobile = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: auto;
  justify-content: center;
  align-items: center;
  padding-left: 22px;
  padding-right: 22px;
  @media (min-width: 400px) {
    display: none;
  }
`;
