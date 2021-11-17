import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MovieDetails } from "./Movie/MovieDetails";
import { MovieSearch } from "./Movie/MovieSearch";
import { getMovieById } from "../store/thunks";
import { useSearchParams } from "react-router-dom";

export const HeaderMenu = () => {

    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const movieParam = searchParams.get("movie");
    const { movieDetails } = useSelector(state => state.movies);

    useEffect(() => {
        if (movieParam)
            dispatch(getMovieById(movieParam));
    }, []);

    return (
        movieDetails ? <MovieDetails /> : <MovieSearch />
    );
};