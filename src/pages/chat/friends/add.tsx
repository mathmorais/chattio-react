import React from "react";
import { Input } from "../../../components/atoms/Input";
import { FriendsMain } from "../../../components/molecules/FriendsMain";
import { FriendsTopBar } from "../../../components/molecules/FriendsTopBar";
import { AddFriend } from "../../../components/organisms/AddFriend";
import { ContentTemplate } from "../../../components/templates/ContentTempalte";
import { ThemeTemplate } from "../../../components/templates/ThemeTemplate";

const FriendsPage: React.FC = () => {
  return (
    <ThemeTemplate title="Chat - Friends">
      <ContentTemplate>
        <FriendsTopBar />
        <FriendsMain>
          <AddFriend />
        </FriendsMain>
      </ContentTemplate>
    </ThemeTemplate>
  );
};

export default FriendsPage;
