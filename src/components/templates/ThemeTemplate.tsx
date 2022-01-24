import React from "react";
import { Fonts } from "../../styles/Fonts";
import { Global } from "../../styles/Global";
import { Helmet } from "react-helmet";

export const ThemeTemplate: React.FC<{ title?: string }> = ({
  title,
  children,
}) => {
  return (
    <>
      <Helmet>
        <title>{title ?? "Chat"}</title>
      </Helmet>
      <Fonts />
      <Global />
      {children}
    </>
  );
};
