export enum FontVariations {
  light,
  medium,
  regular,
  semibold,
}

// All paths are relative to `static` folder (gatsby main folder to static files).

class Fonts {
  fontFamilyKey: string;

  constructor(fontFamilyKey: string) {
    this.fontFamilyKey = fontFamilyKey;
  }

  get fontLicencePath() {
    return "/poppins-font.txt";
  }

  get fontFormats() {
    return ["ttf"];
  }

  handleGetFontFamily() {
    return `${this.fontFamilyKey}, Arial, sans-serif`;
  }

  handleGetFontPath(variation: FontVariations) {
    switch (variation) {
      case FontVariations.light:
        return `/fonts/poppins-light.ttf`;
      case FontVariations.regular:
        return `/fonts/poppins-regular.ttf`;
      case FontVariations.medium:
        return `/fonts/poppins-medium.ttf`;
      case FontVariations.semibold:
        return `/fonts/poppins-semibold.ttf`;
    }
  }
}

export const fonts = new Fonts("Poppins");
