import React from "react";
import { Outlet } from "react-router-dom";
import { Content } from "./Content";
import { ErrorBoundary } from "./ErrorBoundary";
import "./styles.css";

export const Main = () => {
  return (
    <ErrorBoundary>
      <Outlet />
      <Content />
    </ErrorBoundary>
  );
};