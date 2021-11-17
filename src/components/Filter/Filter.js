import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMoviesByParams } from "../../store/thunks";
import { FilterLink } from './FilterLink';
import { genres } from '../../utils/genres';
import { filters } from '../../utils/filters';
import { useParams, useNavigate, useSearchParams } from "react-router-dom";

export const Filter = () => {

    const dispatch = useDispatch();
    const params = useParams();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [selectedOption, setSelectedOption] = useState(filters[0].value);

    useEffect(() => {
        if (searchParams.get("sortBy"))
            setSelectedOption(filters.find(filter => filter.value === searchParams.get("sortBy")).value);
    }, []);

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
        dispatch(getMoviesByParams(params.searchQuery, searchParams.get("genre"), event.target.value));
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
                    {filters.map(item => (
                        <option key={item.value} value={item.value}>{item.label}</option>
                    ))}
                </select>
            </div>
        </div>
    );
};