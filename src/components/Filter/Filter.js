import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getMoviesByParams } from "../../store/thunks";
import { FilterLink } from './FilterLink';
import { genres } from '../../utils/genres';
import { filters } from '../../utils/filters';

export const Filter = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { searchQuery } = useParams();
    const [searchParams] = useSearchParams();
    const [selectedOption, setSelectedOption] = useState(filters[0].value);
    const filterOption = filters.find(filter => filter.value === searchParams.get("sortBy"));

    useEffect(() => {
        if (searchParams.get("sortBy"))
            setSelectedOption(filterOption.value);
    }, []);

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
        dispatch(getMoviesByParams(searchQuery, searchParams.get("genre"), event.target.value));
        navigate(`?sortBy=${event.target.value}`);
    };

    return (
        <div className="filter">
            <div className="genre-filter">
                <ul>
                    {genres.map(({ value, label }) => (<li key={value}><FilterLink key={value} genre={label} /></li>))}
                </ul>
            </div>
            <div className="date-filter">
                <span className="sort">SORT BY</span>
                <select value={selectedOption} onChange={handleChange}>
                    {filters.map(({ value, label }) => (
                        <option key={value} value={value}>{label}</option>
                    ))}
                </select>
            </div>
        </div>
    );
};