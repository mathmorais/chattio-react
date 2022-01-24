import { colors } from "./colors";

class Effects {
  get smallShadow() {
    return `5px 5px 25px ${colors.shadow}, -5px -5px 25px ${colors.shadow};`;
  }
}

export const effects = new Effects();
