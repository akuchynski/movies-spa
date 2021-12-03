import React from "react";
import { useDispatch } from "react-redux";
import { useRouter } from 'next/router';
import Link from 'next/link';
import classNames from 'classnames/bind';
import { getMoviesByParams } from "../../store/thunks";

export const FilterLink = ({ genreValue }) => {

    const dispatch = useDispatch();
    const router = useRouter();
    const { name: [name] = [''], genre } = router.query;
    let filterClassName = classNames({ active : genreValue === genre})

    const handleMenuClick = () => {
        dispatch(getMoviesByParams(name, genre));
    };

    return (
        <li key={genreValue} className={filterClassName}>
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