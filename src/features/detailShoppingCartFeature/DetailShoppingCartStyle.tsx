import React from "react";

import styled from "styled-components";

export const WrapperDetail = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  background-color: whitesmoke;
  align-items: center;
  flex: 1;
`;

export const WrapperDetailProducts = styled.div`
  display: flex;
  width: 100%;
  background-color: whitesmoke;
  height: auto;
  flex-direction: column;
  padding-top: 16px;
  justify-content: flex-start;
  align-items: center;
`;

export const TitleDetail = styled.div`
  font-size: 16px;
  color: #000000;
  text-align: left;
  padding-left: 30px;
  padding: 15px;
  padding-top: 15px;
`;

export const ContentDetail = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 100%;
  background: white;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
`;

export const RowDetail = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  height: auto;
  align-items: center;
  justify-content: space-between;
`;

export const FooterButtons = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  align-items: center;
  justify-content: space-around;
  background-color: white;
  flex: 0;
  box-shadow: 1px 5px 15px -3px rgba(0, 0, 0, 0.32);
`;

export const ButtonDetail = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  width: 100px;
  height: 35px;
  background-color: #ad3245;
  color: #ffffff;
  box-shadow: black 0px 0px 11px;
  border: 0px;
  padding: 2px;
  :hover {
    background-color: red;
  }
`;

export const HeaderDetail = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  background-color: white;
  box-shadow: 1px 5px 15px -3px rgba(0, 0, 0, 0.32);
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  background-color: whitesmoke;
  overflow-y: scroll;
`;

export const WrapperTitle = styled.div`
  display: flex;
  width: auto;
  height: auto;
  flex-direction: row;
  padding-left: 18px;
  padding-top: 10px;
`;

export const TitleDownload = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: #1a0dab;
  text-align: left;
  text-align: center;
  cursor: pointer;
`;

export const DeleteWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
  width: 100%;
  padding-right: 16px;
  padding-top: 3px;
`;

export const Count = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 100%;
  background-color: #3c3c3c;
  color: white;
  width: 20px;
  height: 20px;
  /* border-radius: 12px; */
`;

export const ControlerCount = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: auto;
  width: auto;
  height: auto;
`;
