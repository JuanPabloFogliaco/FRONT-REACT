import React from "react";

import styled from "styled-components";

export const WrapperDetailProducts = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 100vw;
  height: auto;
  justify-content: center;
  background-color: whitesmoke;
  border-radius: "10px";
  align-items: center;
`;

export const WrapperDetail = styled.div`
  width: 100%;
  background: whitesmoke;
  height: 100vh;
  flex-direction: column;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

export const TitleDetail = styled.div`
  font-size: 16px;
  color: #000000;
  text-align: left;
  padding-left: 30px;
  padding: 20px;
`;

export const ContentDetail = styled.div`
  flex-direction: column;
  width: 90%;
  height: auto;
  background: white;
  align-items: center;
  justify-content: center;
  padding: 30px;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 30px;
  border-radius: 30px;
`;

export const RowDetail = styled.div`
  flex-direction: row;
  width: 100%;
  height: auto;
  background: white;
  align-items: center;
  justify-content: space-between;
`;
