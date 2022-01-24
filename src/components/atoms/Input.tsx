import React, { forwardRef, InputHTMLAttributes } from "react";
import styled from "styled-components";
import { colors } from "../../constants/colors";
import { fontSizes } from "../../constants/fontSizes";
import { sizes } from "../../constants/sizes";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  p,
  span {
    font-weight: 500;
  }

  input {
    border-radius: ${sizes.smallRadius};
    border: 1px solid ${colors.mediumGrey};
    padding: ${sizes.smallPadding};
    font-size: ${fontSizes.small};
    margin-bottom: ${sizes.smallMargin};
  }
`;

const InputLabel = styled.p`
  font-size: ${fontSizes.small};
  margin-bottom: ${sizes.smallMargin};
`;

const InputBottomContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  tipMessage?: string;
}

export const Input = forwardRef<HTMLInputElement, IInput>((props, ref) => (
  <InputContainer>
    {props.label && <InputLabel>{props.label}</InputLabel>}
    <input ref={ref} {...props} />
    <InputBottomContainer>
      <span>{props.tipMessage}</span>
    </InputBottomContainer>
  </InputContainer>
));

Input.displayName = "input";
