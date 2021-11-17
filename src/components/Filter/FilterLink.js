import React from "react";
import { useDispatch } from "react-redux";
import { getMoviesByParams } from "../../store/thunks";
import { Link, useParams, useSearchParams } from "react-router-dom";

export const FilterLink = ({ genre }) => {

    const dispatch = useDispatch();
    const params = useParams();
    const { searchQuery } = params;
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