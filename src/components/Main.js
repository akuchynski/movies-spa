import React from "react";
import { Content } from "./Content";
import { ErrorBoundary } from "./ErrorBoundary";
import { Outlet } from "react-router-dom";
import "./styles.css";

export const Main = () => {
  return (
    <ErrorBoundary>
      <Outlet />
      <Content />
    </ErrorBoundary>
  );
};