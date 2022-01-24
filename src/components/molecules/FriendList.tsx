import React from "react";
import styled from "styled-components";
import { sizes } from "../../constants/sizes";
import { FriendCard } from "./FriendCard";

const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1440px;
  padding: ${sizes.mediumPadding};
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FriendList = () => {
  return (
    <Container>
      <List>
        <FriendCard name="Friend 1" />
        <FriendCard name="Friend 2" />
      </List>
    </Container>
  );
};
