import React from "react";

import styled from "styled-components";

// Create a <Title> react component that renders an <h1> which is
// centered, palevioletred and sized at 1.5em
export const Input = styled.input`
  height:30px;
  width: 100%;
  border-color: "#8f8f8f";
  border-width: 0;
  outline: "none";
`;

export const InputGroup = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
`;
