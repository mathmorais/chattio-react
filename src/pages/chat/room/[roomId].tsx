import React from "react";
import { Chat } from "../../../components/organisms/Chat";
import { ContentTemplate } from "../../../components/templates/ContentTempalte";
import { ThemeTemplate } from "../../../components/templates/ThemeTemplate";

const RoomPage: React.FC = (props) => {
  return (
    <ThemeTemplate title="Chat - Home">
      <ContentTemplate>
        <Chat content={["Test", "Test2"]} friendName={"John Scott"} />
      </ContentTemplate>
    </ThemeTemplate>
  );
};

export default RoomPage;
