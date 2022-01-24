import React, { FormEvent } from "react";
import styled from "styled-components";
import { sizes } from "../../constants/sizes";

const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;

  input {
    margin-bottom: ${sizes.mediumMargin};
  }

  button {
    margin-top: ${sizes.mediumMargin};
  }
`;

type FormProps = React.FormHTMLAttributes<HTMLFormElement>;

export const Form: React.FC<FormProps> = ({
  onSubmit,
  children,
  ...others
}) => {
  const handleCallOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (onSubmit) return onSubmit(event);
  };

  return (
    <FormContainer onSubmit={handleCallOnSubmit} {...others}>
      {children}
    </FormContainer>
  );
};
