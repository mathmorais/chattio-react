import React from "react";
import { FormFieldModel } from "../../models/FormFieldModel";
import { Input } from "../atoms/Input";
import { Header, SubTitle } from "../atoms/Text";
import { Card } from "../atoms/Card";
import { Form } from "../atoms/Form";

export interface IFormCardVM {
  fields: { [key: string]: FormFieldModel };
  handleOnSubmit: () => Promise<boolean>;
}

export interface IFormCardProps extends IFormCardVM {
  cardHeader: string;
  cardSubTitle: string;
  onSuccess: () => void;
}

export const FormCard: React.FC<IFormCardProps> = ({
  fields,
  handleOnSubmit,
  ...props
}) => {
  const handleSerializeFields = () => {
    const fieldNames = Object.keys(fields);

    if (fieldNames.length > 0) {
      return fieldNames.map((fieldName, index) => {
        const { ref, inputProps } = fields[fieldName];
        return <Input name={fieldName} ref={ref} key={index} {...inputProps} />;
      });
    }
  };

  return (
    <Card>
      <Header data-testid="register-header">{props.cardHeader}</Header>
      <SubTitle data-testid="register-subtitle">{props.cardSubTitle}</SubTitle>
      <Form
        data-testid="register-form"
        onSubmit={async () => {
          if (await handleOnSubmit()) {
            props.onSuccess();
          } else {
            return;
          }
        }}
      >
        {handleSerializeFields()}
        {props.children}
      </Form>
    </Card>
  );
};
