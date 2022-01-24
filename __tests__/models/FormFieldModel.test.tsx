import React from "react";
import { FormFieldModel } from "../../src/models/FormFieldModel";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Get FormFieldModel input value ", () => {
  let formFieldModel: FormFieldModel;

  beforeEach(() => {
    formFieldModel = new FormFieldModel();
  });

  it("Should return an error if input don't exist", () => {
    expect(formFieldModel).toBeInstanceOf(FormFieldModel);

    expect(formFieldModel.handleGetInputValue).toThrow();
  });

  it("Should return the same value as input", () => {
    expect(formFieldModel).toBeInstanceOf(FormFieldModel);

    const inputElement = <input data-testid="input" ref={formFieldModel.ref} />;

    const screen = render(inputElement);

    const input = screen.getByTestId("input");

    fireEvent.change(input, { target: { value: "test" } });

    expect(input).toHaveValue(formFieldModel.handleGetInputValue());
  });
});
