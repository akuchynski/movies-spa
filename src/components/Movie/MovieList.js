import React from "react";
import { MovieItem } from "./MovieItem";
import { movies } from "../../utils/setMockData";

export const MovieList = () => {
    return (
        <div className="movie-list">
            {movies.map(({ id, name, year, genre, image }) => (
                <MovieItem
                    key={id}
                    name={name}
                    year={year}
                    genre={genre}
                    image={image}
                />
            ))}
        </div>
    )
}