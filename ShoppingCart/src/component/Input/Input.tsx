import React from "react";

import styled from "styled-components";

// Create a <Title> react component that renders an <h1> which is
// centered, palevioletred and sized at 1.5em
export const Input = styled.input`
  background: #e2e0e0;
  border: 0px;
  border-radius: 32px;
  height: 22px;
  width: 400px;
  outline: 0;
  text-align: left;
  padding: 12px;
  font-size: 18px;
`;

export const InputGroup = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
`;
