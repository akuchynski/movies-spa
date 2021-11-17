import React from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../store/actions";
import { joinItems } from "../../utils/movieUtils";
import { useNavigate } from "react-router-dom";

export const MovieDetails = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { movieDetails } = useSelector(state => state.movies);
    const { poster_path, title, vote_average, genres, release_date, runtime, overview } = movieDetails;

    const closeDetails = () => {
        dispatch(actions.closeMovieDetails());
        navigate("/search");
    };

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
                    <div className="genre">{joinItems(genres)}</div>
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