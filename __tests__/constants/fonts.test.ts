import { FontVariations, fonts } from "../../src/constants/fonts";
import { existsSync } from "fs";
import { resolve, join } from "path";

// Set `static` folder as __dirname in the current context
global.__dirname = resolve(__dirname, "../../static");

describe("Fonts", () => {
  it("Should return an valid font", () => {
    const path = fonts.handleGetFontPath(FontVariations.light).split("/");

    path.shift();

    const [folder, font] = path;

    const fontType = font.split(".")[1];

    expect(folder === "fonts").toBeTruthy();
    expect(fonts.fontFormats.includes(fontType)).toBeTruthy();
  });

  it("Should have a license", () => {
    expect(
      existsSync(join(global.__dirname, "/licenses", fonts.fontLicencePath))
    ).toBeTruthy();
  });
});
