import React, { memo } from "react";
import styled from "styled-components";
import { UserContext, UserContextProvider } from "../../contexts/UserContext";
import { SideBar } from "../molecules/SideBar";
import { Tab } from "../molecules/Tab";

const Template = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

const MainContent = styled.main`
  width: 100%;
  height: 100%;
  overflow: hidden;
  input {
    width: 100%;
  }
`;

export const ChatLayout: React.FC = memo(({ children }) => {
  return (
    <UserContextProvider>
      <Template>
        <SideBar />
        <Tab />
        <MainContent>{children}</MainContent>
      </Template>
    </UserContextProvider>
  );
});
