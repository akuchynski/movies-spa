import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getMovieById } from "../store/thunks";
import { MovieDetails } from "./Movie/MovieDetails";
import { MovieSearch } from "./Movie/MovieSearch";

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