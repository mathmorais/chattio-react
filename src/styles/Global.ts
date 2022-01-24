import { createGlobalStyle } from "styled-components";
import { colors } from "../constants/colors";
import { fonts } from "../constants/fonts";
import { fontSizes } from "../constants/fontSizes";

export const Global = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    background: ${colors.background};
    color: ${colors.black};
    font-family: ${fonts.handleGetFontFamily()};
  }


  span {
    font-size: ${fontSizes.extraSmall};
  }

  h2,h3,h4,h5 {
    font-weight: 500;
  }

  button, input, textarea {
    font-family: ${fonts.handleGetFontFamily()};
  }
`;
