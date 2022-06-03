import React from "react";

import styled from "styled-components";

// Create a <Title> react component that renders an <h1> which is
// centered, palevioletred and sized at 1.5em

interface Props {
  width?: string;
  height?: string;
}

export const ImagenComponent = styled.img`
  width: ${(props: Props) => (props.width ? props.width : "23px")};
  height: ${(props: Props) => (props.height ? props.height : "23px")};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
