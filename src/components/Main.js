import React from "react";
import { HeaderMenu } from "./HeaderMenu";
import { Content } from "./Content";
import { ErrorBoundary } from "./ErrorBoundary";
import "./styles.css";

export const Main = () => {
  return (
    <ErrorBoundary>
      <HeaderMenu />
      <Content />
    </ErrorBoundary>
  );
};