import React from "react";

import styled from "styled-components";
interface Props {
  color?: string;
  size?: number;
  padding?: string;
  cursor?: string;
  paddingLeft?: string;
  textAlign?: string;
}
// Create a <Title> react component that renders an <h1> which is
// centered, palevioletred and sized at 1.5em
const TitleDestacado = styled.p`
  display: flex;
  flex-direction: "row";
  justify-content: "center";
  align-items: "center";
  color: ${(props: Props) => (props.color ? props.color : "black")}!important;
  font-size: ${(props: Props) => (props.size ? props.size + "px" : 0 + "px")};
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 800;
  padding: ${(props: Props) => (props.padding ? props.padding : "0px")};
  cursor: ${(props: Props) => (props.cursor ? props.cursor : "")};
  padding-left: ${(props: Props) =>
    props.paddingLeft ? props.paddingLeft : "0px"};
  @media (max-width: 500px) {
    text-align: "center";
    font-size: "12px";
  }
`;

export const TitleDestacadoC = () => {
  return (
    <TitleDestacado size={16} color="#fff" textAlign="left" paddingLeft="30px" padding="20px">
      PRODUCTOS DESTACADOS - CONSTRUCCION
    </TitleDestacado>
  );
};
