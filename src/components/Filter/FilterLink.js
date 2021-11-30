import React from "react";
import { useDispatch } from "react-redux";
import { useRouter } from 'next/router';
import Link from 'next/link';
import { getMoviesByParams } from "../../store/thunks";

export const FilterLink = ({ genreValue }) => {

    const dispatch = useDispatch();
    const router = useRouter();
    const { name: [name] = [], genre } = router.query;
    const isActive = genreValue === genre;

    const handleMenuClick = () => {
        dispatch(getMoviesByParams(name, genre));
    };

    return (
        <li key={genreValue} className={isActive ? "active" : undefined}>
            <Link
                href={`${name}?genre=${genreValue}`}
                key={genreValue}
                onClick={handleMenuClick}
            >
                {genreValue}
            </Link>
        </li>
    );
};