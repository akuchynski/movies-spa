import React from "react";
import MovieItem from "./MovieItem";

let movies = [
    {
        id: 1111,
        name: 'Pulp Fiction',
        year: 1994,
        genre: 'Crime',
        image: './movie1.png'
    },
    {
        id: 2222,
        name: 'Bohemian Rhapsody',
        year: 2018,
        genre: 'Drama',
        image: './movie2.png'
    },
    {
        id: 3333,
        name: 'Kill Bill: Vol.2',
        year: 2004,
        genre: 'Action',
        image: './movie3.png'
    },
]

export default function MovieList() {
    return (
        <div className="movie-list">
            {movies.map((movie) => (
                <MovieItem
                    key={movie.id}
                    name={movie.name}
                    year={movie.year}
                    genre={movie.genre}
                    image={movie.image}
                />
            ))}
        </div>
    )
}