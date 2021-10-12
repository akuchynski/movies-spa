import { useState } from "react";
import { movies } from "../utils/setMockData";

export const useMovieDetails = () => {

  const [movie, setMovie] = useState();

  const handleMovieId = (movieId) => {
    setMovie(movies.find(item => item.id === movieId));
  }

  return [movie, handleMovieId];
}