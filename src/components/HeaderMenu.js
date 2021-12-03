import React from "react";
import { useSelector } from "react-redux";
import { MovieDetails } from "./Movie/MovieDetails";
import { MovieSearch } from "./Movie/MovieSearch";

export const HeaderMenu = () => {

    const { movieDetails } = useSelector(state => state.movies);

    return (
        movieDetails ? <MovieDetails /> : <MovieSearch />
    );
};