import React from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../store/actions";

export const MovieDetails = () => {

    const dispatch = useDispatch();
    const closeDetails = () => dispatch(actions.closeMovieDetails());

    const { movieDetails } = useSelector(state => state.movies);
    const { poster_path, title, vote_average, genres, release_date, runtime, overview } = movieDetails;

    return (
        <div className="movie-details">
            <div className="header-block">
                <div className="logo">movie
                    <span>roulette</span>
                </div>
                <span className="search-menu-icon" onClick={closeDetails}></span>
            </div>
            <div className="movie-full-info">
                <img className="movie-pic" src={poster_path}></img>
                <div className="description">
                    <div className="title">
                        <div className="name">{title}</div>
                        <div className="rating">{vote_average}</div>
                    </div>
                    <div className="genre">{genres.join(', ')}</div>
                    <div className="date-time">
                        <div className="year">{release_date}</div>
                        <div className="duration">{runtime} min</div>
                    </div>
                    <div className="full-desc">{overview}</div>
                </div>
            </div>
        </div>
    );
};