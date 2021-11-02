import React from "react";
import { Provider } from 'react-redux';
import { store } from "../store/configureStore";
import { HeaderMenu } from "./HeaderMenu";
import { Content } from "./Content";
import { ErrorBoundary } from "./ErrorBoundary";
import "./styles.css";

export const App = () => {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <HeaderMenu />
        <Content />
      </ErrorBoundary>
    </Provider>
  );
};