import React from "react";
import { useDispatch } from "react-redux";
import Link from 'next/link';
import { getMoviesByParams } from "../../store/thunks";

export const FilterLink = ({ genre }) => {

    const dispatch = useDispatch();

    const isActive = true;

    const handleMenuClick = () => {
        dispatch(getMoviesByParams(searchQuery, genre));
    };

    return (
        <ul>
            <Link
                href={`?genre=${genre}`}
                key={genre}
                class={isActive ? "active" : undefined}
                onClick={handleMenuClick}
            >
                {genre}
            </Link>
        </ul>
    );
};