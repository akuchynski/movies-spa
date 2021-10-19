import React, { useState } from "react";
import { HeaderMenu } from "./HeaderMenu";
import { MovieDetails } from "./Movie/MovieDetails";
import { Content } from "./Content";
import { ErrorBoundary } from "./ErrorBoundary";
import { useMovieDetails } from "../hooks/useMovieDetails";
import "./styles.css";

export const AppContext = React.createContext();

export const App = () => {

  const [movie, handleMovieId] = useMovieDetails();

  return (
    <AppContext.Provider value={{ movieItem: [movie, handleMovieId] }}>
      <ErrorBoundary>
        {movie ? <MovieDetails /> : <HeaderMenu />}
        <Content />
      </ErrorBoundary>
    </AppContext.Provider>
  );
}