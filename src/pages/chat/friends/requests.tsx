import React from "react";
import {
  FriendList,
  FriendListFilters,
} from "../../../components/molecules/FriendList";
import { FriendsMain } from "../../../components/molecules/FriendsMain";
import { FriendsTopBar } from "../../../components/molecules/FriendsTopBar";
import { ContentTemplate } from "../../../components/templates/ContentTempalte";
import { ThemeTemplate } from "../../../components/templates/ThemeTemplate";
import { UserContextProvider } from "../../../contexts/UserContext";

const FriendRequestsPage: React.FC = () => {
  return (
    <ThemeTemplate title="Chat - Friend Requests">
      <UserContextProvider>
        <ContentTemplate>
          <FriendsTopBar />
          <FriendsMain>
            <FriendList filter={FriendListFilters.request} />
          </FriendsMain>
        </ContentTemplate>
      </UserContextProvider>
    </ThemeTemplate>
  );
};

export default FriendRequestsPage;
