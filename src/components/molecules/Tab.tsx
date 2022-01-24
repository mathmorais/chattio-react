import React from "react";
import styled from "styled-components";
import { colors } from "../../constants/colors";
import { effects } from "../../constants/effects";

const TabContainer = styled.div`
  width: 337.5px;
  background: ${colors.white};
  box-shadow: ${effects.smallShadow};
  z-index: 2;
  padding-top: 35px;

  header {
    padding: 0 15px;
  }
`;

export const Tab: React.FC = () => {
  return <TabContainer></TabContainer>;
};
