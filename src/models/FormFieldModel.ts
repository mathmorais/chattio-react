import { createRef } from "react";
import { IInput } from "../components/atoms/Input";

export class FormFieldModel {
  private inputRef = createRef<HTMLInputElement>();
  inputProps: IInput;

  constructor(inputProps?: IInput) {
    this.inputProps = inputProps ?? { label: "" };
  }

  get ref(): React.RefObject<HTMLInputElement> {
    return this.inputRef;
  }

  handleGetInputValue(): string {
    if (this.ref.current) {
      return this.ref.current.value;
    } else {
      throw new Error("None input was attached to this ref");
    }
  }
}
