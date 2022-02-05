import React from 'react';
import { ChatLayout } from './src/components/layouts/ChatLayout';

export function wrapPageElement({ element, props }) {

  if(props.uri !== "/login" && props.uri !== "/") {
    return  <ChatLayout>{element}</ChatLayout>

  }
}