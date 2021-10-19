import React, { useContext } from "react";
import { AppContext } from "../App";

export const MovieDetails = () => {

    const { movieItem } = useContext(AppContext);
    const [movie, handleMovieId] = movieItem;
    const { image, name, rating, genre, year, duration, description } = movie;

    const openSearchMenu = () => handleMovieId();

    return (
        <div className="movie-details">
            <div className="header-block">
                <div className="logo">movie
                    <span>roulette</span>
                </div>
                <span className="search-menu-icon" onClick={openSearchMenu}></span>
            </div>
            <div className="movie-full-info">
                <img className="movie-pic" src={require("../../assets/images/" + image)}></img>
                <div className="description">
                    <div className="title">
                        <div className="name">{name}</div>
                        <div className="rating">{rating}</div>
                    </div>
                    <div className="genre">{genre}</div>
                    <div className="date-time">
                        <div className="year">{year}</div>
                        <div className="duration">{duration}</div>
                    </div>
                    <div className="full-desc">{description}</div>
                </div>
            </div>
        </div>
    )
}