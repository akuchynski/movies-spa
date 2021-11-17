import React from "react";
import { Provider } from 'react-redux';
import { Routes, Route, Navigate } from "react-router-dom";
import { store } from "../store/configureStore";
import { Main } from "./Main";
import { HeaderMenu } from "./HeaderMenu";
import { NotFound } from "./error/NotFound";
import "./styles.css";

export const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Navigate replace to="/search" />} />
        <Route path="/search" element={<Main />}>
          <Route index element={<HeaderMenu />} />
          <Route path="/search/:searchQuery" element={<HeaderMenu />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Provider>
  );
};