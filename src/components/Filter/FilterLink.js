import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesByGenre } from "../../store/thunks";
import actions from '../../store/actions';

export const FilterLink = ({ genre }) => {

    const dispatch = useDispatch();
    const { activeFilter } = useSelector(state => state.movies);

    useEffect(() => {
        if (genre === 'ALL')
            dispatch(actions.setActiveFilter(genre));
    }, []);

    const handleMenuClick = () => {
        dispatch(actions.setActiveFilter(genre));
        dispatch(getMoviesByGenre(genre));
    };

    return (
        <li><a href="#" className={activeFilter === genre ? "active" : undefined} onClick={handleMenuClick}>{genre}</a></li>
    );
};