import React from "react";

import styled from "styled-components";

interface Props {
  justifyContent?: string;
  alignItems?: string;
}

export const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: auto;
  justify-content: ${(props: Props) =>
    props.justifyContent ? props.justifyContent : "center"};
  align-items: ${(props: Props) =>
    props.alignItems ? props.alignItems : "center"};
  padding-left: 32px;
  padding-right:32px;
`;
