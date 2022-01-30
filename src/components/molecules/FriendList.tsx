import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IFriend } from "../../interfaces/IFriend";
import { IUser } from "../../interfaces/IUser";
import { asyncFetch } from "../../utils/asyncFetch";
import { Paragraphy } from "../atoms/Text";
import { FriendCard } from "./FriendCard";

const List = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export enum FriendListFilters {
  all,
  request,
}

enum RequestState {
  none,
  started,
  completed,
  error,
}

interface IFriendList {
  filter: FriendListFilters;
  limit?: number;
}

export const FriendList: React.FC<IFriendList> = ({ filter, limit = 20 }) => {
  const [friends, setFriends] = useState<IFriend[]>([]);
  const [requestState, setRequestState] = useState<RequestState>(
    RequestState.none
  );
  const token = Cookies.get("token");

  const handleGetFriends = async (filter?: string) => {
    const url = process.env.GATSBY_API_URL;

    if (!url) throw new Error("api.unknown");
    const response = await asyncFetch(`${url}/friends/get/${filter}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const userData = (await response.json()) as {
      friends: IFriend[];
      friendRequests: IFriend[];
    };
    return userData;
  };

  const handleFriendFilters = async () => {
    switch (filter) {
      case FriendListFilters.all:
        const { friends } = await handleGetFriends("all");
        return friends;
      case FriendListFilters.request:
        const { friendRequests } = await handleGetFriends("request");
        return friendRequests;
      default:
        return [];
    }
  };

  const handleListFriends = async () => {
    try {
      setRequestState(RequestState.started);
      setFriends(await handleFriendFilters());
      setRequestState(RequestState.completed);
    } catch (err) {
      setRequestState(RequestState.error);
    }
  };

  const handleRenderFriendCards = () => {
    if (friends) {
      return friends.map(({ user, pending }) => {
        return (
          <FriendCard
            key={user._id}
            requests={filter === FriendListFilters.request}
            pending={pending}
            uid={user._id}
            friendId={user.friendId}
            fullName={user.fullName}
            updateFriendList={handleFriendFilters}
          />
        );
      });
    } else {
      return [];
    }
  };

  useEffect(() => {
    handleListFriends();
  }, []);

  switch (requestState) {
    case RequestState.error:
      return (
        <>
          <Paragraphy>
            An Error Occurred <br /> Check your internet connection and try
            again
          </Paragraphy>
        </>
      );
    case RequestState.completed:
      return (
        <>
          {friends.length > 0 ? (
            <List>{handleRenderFriendCards()}</List>
          ) : (
            <Paragraphy>Nothing here for now...</Paragraphy>
          )}
        </>
      );
    default:
      return (
        <>
          <Paragraphy>Loading</Paragraphy>
        </>
      );
  }
};
