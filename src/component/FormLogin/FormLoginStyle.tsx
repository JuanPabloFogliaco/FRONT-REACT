import React from "react";

import styled from "styled-components";

interface Props {
  width?: string;
  height?: string;
  background?: string;
  borderRadius?: string;
  padding?: string;
}

export const FormLoginWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: 100%;
  height: 100%;
  color: black;
  box-shadow: 1px 5px 15px -3px rgba(0, 0, 0, 0.32);
`;

export const CardForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: "#ffffff";
  border-radius: 11px;
  width: 80%;
  height: auto;
  padding: 16px;
  box-shadow: 0px 0px 32px -10px rgba(0, 0, 0, 0.48);
  -webkit-box-shadow: 0px 0px 32px -10px rgba(0, 0, 0, 0.48);
  -moz-box-shadow: 0px 0px 32px -10px rgba(0, 0, 0, 0.48);
`;

export const ButtonRegister = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  background: red;
  cursor: pointer;
`;

export const FormFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  background: #ffffff;
  width: 100%;
  height: auto;
`;

export const ContainterFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  background: #ffffff;
  width: 100%;
  height: auto;
`;

export const InputGroup = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
`;

export const Input = styled.input`
  height: 30px;
  width: 99%;
  outline: none !important;
  border:0.5;
`;

interface TitleProps {
  color?: string;
}

export const TitleForm = styled.p`
  color: ${(props: TitleProps) =>
    props.color ? props.color : "black"}!important;
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 800;
  cursor: pointer;
`;
