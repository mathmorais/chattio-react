import React from "react";
import styled from "styled-components";
import { colors } from "../../constants/colors";
import { effects } from "../../constants/effects";
import { Span } from "./Text";

const MessageContainer = styled.div`
  width: fit-content;
  max-width: 50%;
  background: ${colors.white};
  padding: 10px 15px;
  margin-bottom: 25px;
  border-radius: 25px 25px 25px 0;
  font-weight: 500;
  box-shadow: ${effects.smallShadow};
`;

export const Message: React.FC = ({ children }) => {
  return (
    <MessageContainer>
      <Span>{children}</Span>
    </MessageContainer>
  );
};
