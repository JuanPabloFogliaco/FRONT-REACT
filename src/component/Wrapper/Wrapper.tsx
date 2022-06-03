import React from "react";

import styled from "styled-components";

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
  cursor?: any;
  boxShadow?: boolean;
  radius?: string;
}

// Create a <Title> react component that renders an <h1> which is
// centered, palevioletred and sized at 1.5em
export const Wraper = styled.div`
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
  top: ${(props: Props) => (props.top ? props.top : "0px")};
  padding-left: ${(props: Props) =>
    props.paddingLeft ? props.paddingLeft : "0px"};
  flex-wrap: ${(props: Props) => (props.wrap ? props.wrap : "")};
  padding-right: ${(props: Props) =>
    props.paddingRight ? props.paddingRight : "0px"};
  position: ${(props: Props) => (props.position ? props.position : "0px")};
  padding-top: ${(props: Props) =>
    props.paddingTop ? props.paddingTop : "0px"};
  cursor: ${(props: Props) => (props.cursor ? props.cursor : "")};
  box-shadow: ${(props: Props) =>
    props.boxShadow ? "1px 5px 15px -3px rgba(0, 0, 0, 0.32)" : ""};
   border-radius: ${(props: Props) =>
    props.radius ? props.radius : "0px"};
`;
