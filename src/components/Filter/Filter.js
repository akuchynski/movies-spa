import React from "react";
import { useDispatch } from "react-redux";
import { getMoviesByDate, getMoviesByRating } from "../../store/thunks";
import { FilterLink } from './FilterLink';

export const Filter = () => {

    const genres = ['ALL', 'DOCUMENTARY', 'COMEDY', 'HORROR', 'CRIME'];

    const dispatch = useDispatch();
    const loadByDate = () => dispatch(getMoviesByDate());
    const loadByRating = () => dispatch(getMoviesByRating());

    return (
        <div className="filter">
            <div className="genre-filter">
                <ul>
                    {genres.map((genre) => (<FilterLink key={genre} genre={genre} />))}
                </ul>
            </div>
            <div className="date-filter">
                <span className="sort">SORT BY</span>
                <button className="drop-btn">RELEASE DATE</button>
                <div className="dropdown-content">
                    <a href="#" onClick={loadByDate}>DATE</a>
                    <a href="#" onClick={loadByRating}>RATING</a>
                </div>
            </div>
        </div>
    );
};