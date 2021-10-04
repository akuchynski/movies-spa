import React from "react";
import "./styles.css";
import HeaderMenu from "./HeaderMenu";
import Content from "./Content";
import ModalContainer from "./modal/ModalContainer";

export default function App() {
  return (
    <div className="main-container">
      <HeaderMenu />
      <Content />
    </div>
  );
}