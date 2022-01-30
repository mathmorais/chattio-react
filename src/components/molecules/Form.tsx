import React, { FormEvent, useState } from "react";
import styled from "styled-components";
import { sizes } from "../../constants/sizes";
import { FormFieldModel } from "../../models/FormFieldModel";
import { ErrorText } from "../atoms/ErrorText";
import { Input } from "../atoms/Input";

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

export interface IFormVM {
  formExeceptions?: { [errorCode: string]: string };
  onSubmit: () => Promise<void>;
}

interface IForm {
  onSuccess?: () => void;
  props?: FormProps;
}

export const Form: React.FC<IForm & IFormVM> = ({
  onSubmit,
  onSuccess,
  formExeceptions,
  children,
  props,
}) => {
  const [errorCode, setErrorCode] = useState("");
  const handleFormExceptions = (): string => {
    if (formExeceptions) {
      return formExeceptions[errorCode] ?? "Unknown Error Ocurred";
    } else {
      return "Missing FormExceptions";
    }
  };

  return (
    <FormContainer
      {...props}
      onSubmit={async (event) => {
        event.preventDefault();
        try {
          await onSubmit();
          onSuccess && onSuccess();
        } catch (err) {
          const errorMessage =
            err instanceof Error ? err.message : "error.unknown";
          setErrorCode(errorMessage);
        }
      }}
    >
      {children}
      {errorCode && <ErrorText>{handleFormExceptions()}</ErrorText>}
    </FormContainer>
  );
};
