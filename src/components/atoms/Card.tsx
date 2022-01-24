import React from "react";
import styled from "styled-components";
import { effects } from "../../constants/effects";
import { colors } from "../../constants/colors";
import { sizes } from "../../constants/sizes";

interface ICard {
  alignItems?: React.CSSProperties["alignItems"];
}

const CardContainer = styled.section<ICard>`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: ${({ alignItems }) => alignItems ?? "initial"};
  padding: ${sizes.mediumPadding};
  border-radius: ${sizes.smallRadius};
  box-shadow: ${effects.smallShadow};
  background: ${colors.white};

  form {
    margin: ${sizes.mediumMargin} 0;
  }
`;

export const Card: React.FC<ICard> = ({ children, alignItems }) => {
  return <CardContainer alignItems={alignItems}>{children}</CardContainer>;
};
