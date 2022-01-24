import { navigate } from "gatsby-link";
import React from "react";
import styled from "styled-components";
import { colors } from "../../constants/colors";

type SideBarItemButtonProps = {
  isSelected?: boolean;
};

interface ISideBarItem {
  url: string;
}

const SideBarItemButton = styled.button<SideBarItemButtonProps>`
  width: 100%;
  border: none;
  background: ${({ isSelected }) => (isSelected ? colors.mediumBlue : "none")};
  color: ${({ isSelected }) => (isSelected ? colors.white : colors.mediumGrey)};
  transition: filter 0.15s ease-in, background 0.15s ease-in;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;

  svg {
    fill: ${colors.white};
    width: 45%;
    height: 100%;
    padding-top: 25%;
    padding-bottom: 25%;
  }

  &:hover {
    filter: opacity(0.8);
  }
`;

export const SideBarItem: React.FC<ISideBarItem> = (props) => {
  const handleGetCurrentPath = (url: string): string => {
    const splitedPath = url.split("");
    const querySymbolIndex = splitedPath.indexOf("?");
    const parsedSymbolIndex =
      querySymbolIndex < 0 ? url.length : querySymbolIndex;
    let currentPath = "";

    for (let index = parsedSymbolIndex - 1; index > 0; index--) {
      if (splitedPath[index] === "/") return currentPath;

      if (index < parsedSymbolIndex) {
        currentPath = splitedPath[index] + currentPath;
      }
    }

    return currentPath;
  };

  return (
    <SideBarItemButton
      isSelected={
        handleGetCurrentPath(props.url) ===
        handleGetCurrentPath(document.baseURI)
      }
      onClick={() => navigate(props.url)}
    >
      {props.children}
    </SideBarItemButton>
  );
};
