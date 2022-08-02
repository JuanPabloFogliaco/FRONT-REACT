import React from "react";

import styled from "styled-components";

export const WrapperSubHeader = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #f0efef;
  color: black;
  box-shadow: 1px 5px 15px -3px rgba(0, 0, 0, 0.32);
`;

export const WrapperSearch = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: white;
  width: 80%;
  height: auto;
  border-radius: 18px;
  box-shadow: "1px 5px 15px -3px rgba(0, 0, 0, 0.32)";
  padding-left: 4px;
  padding-right: 4px;
`;

export const ContentSearch = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: auto;
  background: white;
  border-radius: 18px;
  width: 100%;
`;

export const ButtonFilter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  width: auto;
  height: auto;
  padding: 4px;
  border: 0px;
  padding-right: 5px;
`;

export const InputSearch = styled.input`
  height: 30px;
  width: 100%;
  border-color: "#8f8f8f";
  border-width: 0;
  outline: none;
`;
