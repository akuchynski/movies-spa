import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import ImageFallback from "../../components/Image/ImageFallback";
import actions from "../../store/actions";
import { joinItems } from "../../utils/movieUtils";
import fallbackPic from '../../../public/images/fallback.png';

const Wrapper = styled.div`
    width: 100%;
    > div {
    position: unset !important;
    }
`;

export const MovieDetails = () => {

    const dispatch = useDispatch();
    const { movieDetails } = useSelector(state => state.movies);
    const { poster_path, title, vote_average, genres, release_date, runtime, overview } = movieDetails;

    const closeDetails = () => {
        dispatch(actions.closeMovieDetails());
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
                <Wrapper>
                    <ImageFallback
                        width="322"
                        height="455"
                        className="movie-pic"
                        src={`${poster_path}`}
                        fallbackSrc={fallbackPic}
                    />
                </Wrapper>
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