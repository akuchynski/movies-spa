import React from "react";
import { Provider } from 'react-redux';
import { Routes, Route, Navigate } from "react-router-dom";
import { store } from "../store/configureStore";
import { Main } from "./Main";
import "./styles.css";

export const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/search" element={<Main />} />
        <Route path="/" element={<Navigate replace to="/search" />} />
      </Routes>
    </Provider>
  );
};