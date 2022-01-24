import React from "react";
import { Title } from "../../../components/atoms/Text";
import { ContentTemplate } from "../../../components/templates/ContentTempalte";
import { ThemeTemplate } from "../../../components/templates/ThemeTemplate";

const RoomFallbackPage: React.FC = (props) => {
  return (
    <ThemeTemplate title="Chat - Home">
      <ContentTemplate></ContentTemplate>
    </ThemeTemplate>
  );
};

export default RoomFallbackPage;
