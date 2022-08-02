import React from "react";

import styled from "styled-components";

export const WrapperFilter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f0efef;
  height: 350px;
  width: 100%;
  padding-top: 40px;
`;

export const ListOptions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  height: 340px;
  width: 90%;
  padding-top: 30px;
`;

export const Option = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #faf4f4;
  height: 20px;
  width: 90%;
  margin-bottom: 20px;
  border-radius: 10px;
`;

export const Text = styled.div`
  width: auto;
  height: auto;
  color: black;
`;
