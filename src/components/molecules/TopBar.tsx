import React from "react";
import styled from "styled-components";
import { colors } from "../../constants/colors";
import { Paragraphy, SubTitle, Title } from "../atoms/Text";

const Header = styled.header`
  display: flex;
  padding: 15px 25px;
  height: 55px;
  align-items: center;
  background: ${colors.white};
  border-bottom: 1px solid ${colors.lightGrey};

  h2 {
    font-weight: bold;
  }
`;

const Separator = styled.div`
  width: 1px;
  height: 100%;
  background: ${colors.lightGrey};
  align-self: normal;
  margin: 0 15px;
`;

interface ITopBarProps {
  title?: string;
}

export const TopBar: React.FC<ITopBarProps> = ({ title, children }) => {
  return (
    <Header>
      {title && (
        <>
          <Title>{title}</Title>
          <Separator />
        </>
      )}
      {children}
    </Header>
  );
};
