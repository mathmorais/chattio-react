import React from "react";
import styled from "styled-components";
import { colors } from "../../constants/colors";
import { fontSizes } from "../../constants/fontSizes";

export const ErrorText = styled.p`
  font-size: ${fontSizes.extraSmall};
  font-weight: 700;
  color: ${colors.error};
`;
