import React from "react";
import styled from "styled-components";
import { colors } from "../../constants/colors";
import { sizes } from "../../constants/sizes";
import { Button } from "../atoms/Button";
import { Span, SubTitle } from "../atoms/Text";
import MoreIcon from "/static/svgs/more.svg";
import MessageIcon from "/static/svgs/message.svg";
import CloseIcon from "/static/svgs/close.svg";
import DoneIcon from "/static/svgs/done.svg";
import CancelIcon from "/static/svgs/cancel.svg";
import { FriendCardRequestActionsVM } from "../../view-models/FriendCardRequestActionsVM";
import { IFriend } from "../../interfaces/IFriend";

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
  display: flex;
  flex-direction: column;
  h3 {
    font-weight: bold;
  }
`;

const FriendInfoRow = styled.div`
  display: flex;
  span {
    font-weight: bold;
    margin-right: 5px;
  }
  span:last-of-type {
    color: ${colors.mediumBlue};
  }
`;

const FriendActions = styled.div`
  display: flex;
  button {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0 10px;
    background: ${colors.lightGrey};

    svg {
      width: 90%;
      height: 90%;
      padding: 6px;
      fill: ${colors.darkGrey};
    }
  }
`;

interface IFriendCard {
  uid: string;
  fullName: string;
  friendId: string;
  pending: boolean;
  requests: boolean;
  updateFriendList: () => Promise<IFriend[]>;
}

export const FriendCard: React.FC<IFriendCard> = (props) => {
  const friendCardActionsVM = new FriendCardRequestActionsVM(props.uid);

  return (
    <Container>
      <FriendInfo>
        <SubTitle>{props.fullName}</SubTitle>
        <FriendInfoRow>
          <Span>{props.friendId}</Span>
          <Span>{props.pending && "Pending"}</Span>
        </FriendInfoRow>
      </FriendInfo>
      {props.requests ? (
        <FriendActions>
          <Button
            onClick={() =>
              friendCardActionsVM.handleExecuteFriendRequestAction("accept")
            }
            transparent
            title="Accept"
          >
            <DoneIcon />
          </Button>
          <Button
            transparent
            onClick={() =>
              friendCardActionsVM.handleExecuteFriendRequestAction("ignore")
            }
            title="Ignore"
          >
            <CloseIcon />
          </Button>
        </FriendActions>
      ) : props.pending ? (
        <FriendActions>
          <Button transparent title="Cancel">
            <CancelIcon />
          </Button>
        </FriendActions>
      ) : (
        <FriendActions>
          <Button transparent title="Message">
            <MessageIcon />
          </Button>
          <Button transparent title="More">
            <MoreIcon />
          </Button>
        </FriendActions>
      )}
    </Container>
  );
};
