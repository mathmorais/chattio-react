import React from "react";
import { Friends } from "../../components/organisms/Friends";
import { ContentTemplate } from "../../components/templates/ContentTempalte";
import { ThemeTemplate } from "../../components/templates/ThemeTemplate";
import { FriendFilterProvider } from "../../contexts/FriendsFilterContext";

const FriendsPage: React.FC = () => {
  return (
    <ThemeTemplate title="Chat - Friends">
      <ContentTemplate>
        <FriendFilterProvider>
          <Friends />
        </FriendFilterProvider>
      </ContentTemplate>
    </ThemeTemplate>
  );
};

export default FriendsPage;
