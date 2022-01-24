import React from "react";
import styled from "styled-components";
import { Button } from "../atoms/Button";
import { Paragraphy } from "../atoms/Text";
import { FormCard, IFormCardProps } from "../molecules/FormCard";

const AuthFormCardContainer = styled.div`
  width: 90%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    margin-top: 15px;
  }
`;

export const AuthFormCard: React.FC<IFormCardProps> = ({
  children,
  ...props
}) => {
  return (
    <AuthFormCardContainer>
      <FormCard {...props}>
        <Button type="submit">{props.cardHeader}</Button>
      </FormCard>
      <Paragraphy>{children}</Paragraphy>
    </AuthFormCardContainer>
  );
};
