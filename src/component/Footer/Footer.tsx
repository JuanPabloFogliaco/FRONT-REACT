import React from "react";

import styled from "styled-components";

interface Props {
  background?: string;
  active?: boolean;
}

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  background-color: white;
  height: 100px;
  width: 100%;
`;
