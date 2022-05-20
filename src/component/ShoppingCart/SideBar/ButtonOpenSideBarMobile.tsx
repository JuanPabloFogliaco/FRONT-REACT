import React from "react";

import styled from "styled-components";

interface Props {
  active?: string;
}

export const ButtonOpenSideBarMobile = styled.div`
   display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  width: 130px;
  height: 40px;
  background-color: ${(props: Props) => (props.active ? "#ad3245" : "#dedede")};
  color: ${(props: Props) => (props.active ? "#e6bfc5" : "#4d4d4d")};
  box-shadow: black 0px 0px 11px;
  border: 0px;
  @media (min-width: 400px) {
    display: none;
  }
`;
