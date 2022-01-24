import React from "react";
import { IChatContent, ChatContent } from "../molecules/ChatContent";
import { TopBar } from "../molecules/TopBar";

export const Chat: React.FC<IChatContent> = (props) => {
  return (
    <>
      <TopBar></TopBar>
      <ChatContent content={props.content} friendName={props.friendName} />
    </>
  );
};
