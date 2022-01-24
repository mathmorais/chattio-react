import React from "react";
import styled from "styled-components";

const Template = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const CentralizedTemplate: React.FC = ({ children }) => {
  return <Template>{children}</Template>;
};
