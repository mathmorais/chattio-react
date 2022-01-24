import React from "react";
import styled from "styled-components";
import { colors } from "../../constants/colors";
import { sizes } from "../../constants/sizes";
import { Button } from "../atoms/Button";
import { Paragraphy } from "../atoms/Text";
import MoreIcon from "/static/svgs/more.svg";
import MessageIcon from "/static/svgs/message.svg";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${sizes.smallPadding};
  width: 100%;
  border-bottom: 1px solid ${colors.mediumGrey};
  margin-bottom: 10px;
`;

const FriendInfo = styled.div`
  p {
    font-weight: bold;
  }
`;

const FriendActions = styled.div`
  display: flex;
  button {
    padding: 0;
    margin: 0 10px;

    svg {
      fill: ${colors.darkGrey};
    }
  }
`;

interface IFriendCard {
  name: string;
  photoUrl?: string;
  online?: string;
}

export const FriendCard: React.FC<IFriendCard> = ({ name }) => {
  return (
    <Container>
      <FriendInfo>
        <Paragraphy>{name}</Paragraphy>
      </FriendInfo>
      <FriendActions>
        <Button transparent title="Message">
          <MessageIcon />
        </Button>
        <Button transparent title="More">
          <MoreIcon />
        </Button>
      </FriendActions>
    </Container>
  );
};
