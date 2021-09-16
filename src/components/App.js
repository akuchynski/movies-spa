import React from "react";
import "./styles.css";
import { SearchForm } from "./SearchForm";
import { Counter } from "./Counter";
import {
  HeaderSection,
  ComponentMenu,
  PureComponentMenu,
  FooterSection
} from "./PageComponents";

export default function App() {
  return (
    <div className="App">
      <HeaderSection />
      <SearchForm />
      <Counter />
      <ComponentMenu />
      <PureComponentMenu />
      <FooterSection />
    </div>
  );
}
