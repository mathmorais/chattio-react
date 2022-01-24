import React, { useContext } from "react";
import styled from "styled-components";
import { FriendFilterContext } from "../../contexts/FriendsFilterContext";
import { Button } from "../atoms/Button";
import { FriendList } from "../molecules/FriendList";
import { TopBar } from "../molecules/TopBar";

const Actions = styled.div`
  display: flex;
  width: 50%;
  height: 100%;

  button {
    max-width: 100px;
    margin-right: 25px;
  }
`;

export const Friends: React.FC = () => {
  const { filter, setFilter } = useContext(FriendFilterContext);

  return (
    <>
      <TopBar title="Friends">
        <Actions>
          <Button transparent onClick={() => setFilter("all")}>
            All
          </Button>
          <Button transparent onClick={() => setFilter("online")}>
            Online
          </Button>
          <Button transparent onClick={() => setFilter("pending")}>
            Pending
          </Button>
          <Button>Add Friend</Button>
        </Actions>
      </TopBar>
      <main>
        <FriendList />
      </main>
    </>
  );
};
