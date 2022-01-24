import React from "react";
import styled from "styled-components";
import { Input } from "../atoms/Input";
import { Message } from "../atoms/Message";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 25px;
  input {
    width: 100%;
  }
`;

const Content = styled.div`
  max-height: 90%;
  overflow: auto;
  padding: 0 35px;
  padding-top: 35px;
`;

const ChatInput = styled.div`
  padding: 0 35px;
`;

export interface IChatContent {
  content: string[];
  friendName: string;
}

export const ChatContent: React.FC<IChatContent> = ({ content }) => {
  const handleComponentizeMessages = () => {
    return content.map((message, index) => {
      return <Message key={index}>{message}</Message>;
    });
  };

  return (
    <Container>
      <Content>{handleComponentizeMessages()}</Content>
      <ChatInput>
        <Input placeholder="Type here to chat" />
      </ChatInput>
    </Container>
  );
};
