import React from "react";
import { HeaderMenu } from "./HeaderMenu";
import { Content } from "./Content";
import { ErrorBoundary } from "./ErrorBoundary";
import "./styles.css";

const App = () => {
  return (
    <div className="main-container">
      <ErrorBoundary>
        <HeaderMenu />
        <Content />
      </ErrorBoundary>
    </div>
  );
}

export default App;