import React from "react";

import styled from "styled-components";

interface Props {
  width?: string;
  height?: string;
  background?: string;
  borderRadius?: string;
  padding?: string;
}
// Create a <Title> react component that renders an <h1> which is
// centered, palevioletred and sized at 1.5em
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${(props: Props) =>
    props.background ? props.background : "#ffffff"};
  border-radius: ${(props: Props) =>
    props.borderRadius ? props.borderRadius : "11px"};
  width: ${(props: Props) => (props.width ? props.width : "auto")};
  height: ${(props: Props) => (props.height ? props.height : "auto")};
  padding: ${(props: Props) => (props.padding ? props.padding : "0px")}; 
  box-shadow: 0px 0px 32px -10px rgba(0,0,0,0.48);
-webkit-box-shadow: 0px 0px 32px -10px rgba(0,0,0,0.48);
-moz-box-shadow: 0px 0px 32px -10px rgba(0,0,0,0.48);
`;

