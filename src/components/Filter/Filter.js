import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getMovies, getMoviesByDate, getMoviesByRating } from "../../store/thunks";
import { FilterLink } from './FilterLink';
import { genres } from '../../utils/genres';
import { filters } from '../../utils/filters';

export const Filter = () => {

    const dispatch = useDispatch();
    const [selectedOption, setSelectedOption] = useState(filters[0]);

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
        switch (event.target.value) {
            case 'DATE':
                return dispatch(getMoviesByDate());
            case 'RATING':
                return dispatch(getMoviesByRating());
            default:
                return dispatch(getMovies());
        };
    };

    return (
        <div className="filter">
            <div className="genre-filter">
                <ul>
                    {genres.map(({ value, label }) => (<FilterLink key={value} genre={label} />))}
                </ul>
            </div>
            <div className="date-filter">
                <span className="sort">SORT BY</span>
                <select value={selectedOption} onChange={handleChange}>
                    {filters.map(item => (
                        <option key={item} value={item}>{item}</option>
                    ))}
                </select>
            </div>
        </div>
    );
};