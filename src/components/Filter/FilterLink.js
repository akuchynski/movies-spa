import React from "react";
import { useDispatch } from "react-redux";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { getMoviesByParams } from "../../store/thunks";

export const FilterLink = ({ genre }) => {

    const dispatch = useDispatch();
    const { searchQuery } = useParams();
    const [searchParams] = useSearchParams();

    const genres = searchParams.getAll("genre");
    const isActive = genres.includes(genre);

    const handleMenuClick = () => {
        dispatch(getMoviesByParams(searchQuery, genre));
    };

    return (
        <Link
            to={`?genre=${genre}`}
            key={genre}
            className={isActive ? "active" : undefined}
            onClick={handleMenuClick}
        >
            {genre}
        </Link>
    );
};