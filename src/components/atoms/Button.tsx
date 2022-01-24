import { collectStoredAnnotations } from "mobx/dist/internal";
import React, { ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import { animations } from "../../constants/animations";
import { colors } from "../../constants/colors";
import { fontSizes } from "../../constants/fontSizes";
import { sizes } from "../../constants/sizes";

const ButtonContainer = styled.button<IButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  padding: ${sizes.smallPadding};
  background: ${(props) => (!props.transparent ? colors.mediumBlue : "none")};
  color: ${(props) => (!props.transparent ? colors.white : colors.black)};
  border-radius: ${sizes.smallRadius};
  border: none;
  cursor: pointer;
  font-weight: 500;
  font-size: ${fontSizes.small};
  transition: filter ${animations.regularTransition};

  &:hover {
    filter: opacity(0.8);
  }
`;

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  transparent?: boolean;
}

export const Button: React.FC<IButtonProps> = ({ children, ...others }) => {
  return <ButtonContainer {...others}>{children}</ButtonContainer>;
};
