import React from "react";

import styled from "styled-components";
interface Props {
  color?: string;
  size?: number;
  padding?: string;
  cursor?: string;
  paddingLeft?: string;
}
// Create a <Title> react component that renders an <h1> which is
// centered, palevioletred and sized at 1.5em
export const Title = styled.p`
  color: ${(props: Props) => (props.color ? props.color : "black")}!important;
  font-size: ${(props: Props) => (props.size ? props.size + "px" : 14 + "px")};
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 800;
  padding: ${(props: Props) => (props.padding ? props.padding : "0px")};
  cursor: ${(props: Props) => (props.cursor ? props.cursor : "")};
  padding-left: ${(props: Props) =>
    props.paddingLeft ? props.paddingLeft : "0px"};
`;
