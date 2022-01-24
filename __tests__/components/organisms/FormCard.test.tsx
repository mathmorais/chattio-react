import React from "react";
import { fireEvent, render, RenderResult } from "@testing-library/react";
import "@testing-library/jest-dom";
import { FormCard } from "../../../src/components/molecules/FormCard";

describe("<FormCard />", () => {
  const props = {
    cardHeader: "Test header",
    cardSubTitle: "Test subtitle",
    fields: {},
    handleOnSubmit: jest.fn(),
  };
  let screen: RenderResult;

  beforeEach(() => {
    screen = render(<FormCard {...props} />);
  });

  it("Should should submit a form", () => {
    const form = screen.getByTestId("register-form");

    fireEvent.submit(form);

    expect(props.handleOnSubmit).toHaveBeenCalled();
  });

  it("Should show a form card following the props", () => {
    expect(screen.getByTestId("register-header")).toHaveTextContent(
      props.cardHeader
    );
    expect(screen.getByTestId("register-subtitle")).toHaveTextContent(
      props.cardSubTitle
    );
  });
});
