import React from "react";

import styled from "styled-components";
interface Props {
  height?: string;
  width?: string;
}
// Create a <Title> react component that renders an <h1> which is
// centered, palevioletred and sized at 1.5em
export const Separator = styled.div`
  height: ${(props: Props) => (props.height ? props.height + "px" : 14 + "px")};
  width: ${(props: Props) => (props.width ? props.width + "px" : 0 + "px")};;
`;
