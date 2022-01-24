import { createGlobalStyle } from "styled-components";
import { FontVariations, fonts } from "../constants/fonts";

// prettier-ignore
export const Fonts = createGlobalStyle`
  @font-face {
    font-family: ${fonts.fontFamilyKey};
    font-weight: 300;
    src: url(${fonts.handleGetFontPath(FontVariations.light)}) format('truetype');
  }

  @font-face {
    font-family: ${fonts.fontFamilyKey};
    font-weight: 400;
    src: url(${fonts.handleGetFontPath(FontVariations.regular)}) format('truetype');
  }

  @font-face {
    font-family: ${fonts.fontFamilyKey};
    font-weight: 500;
    src: url(${fonts.handleGetFontPath(FontVariations.medium)}) format('truetype');
  }

  @font-face {
    font-family: ${fonts.fontFamilyKey};
    font-weight: 600;
    src: url(${fonts.handleGetFontPath(FontVariations.semibold)}) format('truetype');
  }
`;
