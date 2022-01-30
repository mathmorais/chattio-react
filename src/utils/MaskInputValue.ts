export class MaskInputValue {
  mask: string = "____-____-____";
  private splittedMask = this.mask.split("");
  private onlyNumbersRegex = /^[A-Z0-9]/;

  constructor(mask?: string) {
    mask = mask && this.mask;
  }

  handleSplitData = (data: string) => {
    return data.split("");
  };

  handleFilterChars = (data: string) => {
    return this.handleSplitData(data).filter((char) =>
      this.onlyNumbersRegex.test(char)
    );
  };

  handleReplaceChars = (
    data: string[],
    charOffset: {
      start: number;
      end: number;
    }
  ) => {
    if (this.splittedMask[charOffset.start] === "-") {
      charOffset.start += 1;
      charOffset.end += 1;
    }

    return {
      value: this.splittedMask
        .map((char) => {
          if (char !== "_") return char;
          if (data.length <= 0) return char;
          return data.shift();
        })
        .join(""),
      offset: charOffset,
    };
  };

  execute({ value, selectionStart, selectionEnd }: HTMLInputElement) {
    const upperCasedValue = value.toUpperCase();
    const charOffset = {
      start: selectionStart ?? 1,
      end: selectionEnd ?? 1,
    };

    return this.handleReplaceChars(
      this.handleFilterChars(upperCasedValue),
      charOffset
    );
  }
}
