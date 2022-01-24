import React from "react";
import { GatsbyLinkProps, Link as LinkProvider } from "gatsby";
import styled from "styled-components";
import { colors } from "../../constants/colors";

const LinkContainer = styled(LinkProvider)`
  display: inline;

  font-weight: 500;
  text-decoration: none;
  color: ${colors.mediumBlue};
`;

export const Redirect: React.FC<GatsbyLinkProps<Window>> = ({
  to,
  children,
}) => {
  return <LinkContainer to={to}>{children}</LinkContainer>;
};
