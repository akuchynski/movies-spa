import React, { useContext } from "react";
import { AppContext } from "../App";

export const MovieDetails = () => {
    
    const { movieItem } = useContext(AppContext);
    const [movie, handleMovieId] = movieItem;

    return (
        <div className="movie-details">
            <div className="header-block">
                <div className="logo">movie
                    <span>roulette</span>
                </div>
                <span className="search-menu-icon" onClick={() => handleMovieId()}></span>
            </div>
            <div className="movie-full-info">
                <img className="movie-pic" src={require("../../assets/images/" + movie.image)}></img>
                <div className="description">
                    <div className="title">
                        <div className="name">{movie.name}</div>
                        <div className="rating">{movie.rating}</div>
                    </div>
                    <div className="genre">{movie.genre}</div>
                    <div className="date-time">
                        <div className="year">{movie.year}</div>
                        <div className="duration">{movie.duration}</div>
                    </div>
                    <div className="full-desc">{movie.description}</div>
                </div>
            </div>
        </div>
    )
}