import React from "react";
import { useSelector } from "react-redux";
import { MovieItem } from "./MovieItem";
import { MovieMessages } from "./MovieMessages";

export const MovieList = () => {

    const { isLoading, movies, errorMessage } = useSelector(state => state.movies);

    return (
        <div className="movie-list">
            <MovieMessages isLoading={isLoading} errorMessage={errorMessage} />
            {movies && movies.map(({ id, title, release_date, genres, poster_path }) => (
                <MovieItem
                    key={id}
                    movieId={id}
                    title={title}
                    release_date={release_date}
                    genres={genres}
                    poster_path={poster_path}
                />
            ))}
        </div>
    );
};