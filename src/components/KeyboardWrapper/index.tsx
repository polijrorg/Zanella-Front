/* eslint-disable react/prop-types */
import { KeyboardAvoidingView, Platform } from "react-native";
import { styled } from "styled-components";
import React from "react";

const Wrapper = styled(KeyboardAvoidingView)`
 justify-content: center;
 align-items: center;
 width: 80%;
`;

export default function KeyboardWrapper({ children, height }) {
  if (Platform.OS === "ios") {
    return (
      <Wrapper
        keyboardVerticalOffset={height * 0.08}
        behavior="position"
      >
        {children}
      </Wrapper>
    );
  }
  return children;
}