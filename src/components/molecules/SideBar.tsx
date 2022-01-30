import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../../constants/colors";
import { SideBarItem } from "../atoms/SideBarItem";
import InboxIcon from "/static/svgs/inbox.svg";
import PeopleIcon from "/static/svgs/people.svg";

const SideBarContainer = styled.div`
  display: flex;
  width: 90px;
  height: 100%;
  flex-direction: column;
  z-index: 3;
  background: ${colors.darkBlue};

  svg {
    fill: ${colors.white};
  }
`;

export const SideBar: React.FC = () => {
  return (
    <SideBarContainer>
      <SideBarItem url="/chat/room">
        <InboxIcon />
      </SideBarItem>
      <SideBarItem url="/chat/friends/all">
        <PeopleIcon />
      </SideBarItem>
    </SideBarContainer>
  );
};
