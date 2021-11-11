import React, { useState } from "react";
import { useDispatch, batch } from "react-redux";
import { getMovieById } from "../../store/thunks";
import actions from "../../store/actions";
import { useClickOutside } from "../../hooks/useClickOutside";
import PropTypes from 'prop-types';
import { DeleteMovieModal } from "../Modal/DeleteMovie";
import { MovieModal } from "../Modal/MovieModal";
import { joinItems, getYear } from "../../utils/movieUtils";
import MovieButton from '../../assets/images/movie-menu-btn.png';

export const MovieItem = ({ movieId, title, release_date, genres, poster_path }) => {

    const dispatch = useDispatch();
    const [isMenuActive, setMenuActive] = useState(false);
    const [isEditActive, setEditActive] = useState(false);
    const [isDeleteActive, setDeleteActive] = useState(false);

    const loadMovieDetails = () => {
        batch(() => {
            dispatch(getMovieById(movieId));
            dispatch(actions.openMovieDetails());
        });
    };

    const handleMenuToggle = () => {
        setMenuActive(!isMenuActive);
    };

    const handleEditModal = () => {
        setEditActive(!isEditActive);
    };

    const handleDeleteModal = () => {
        setDeleteActive(!isDeleteActive);
    };

    const ref = useClickOutside(handleMenuToggle);

    return (
        <div className="item">
            <img className="movie-pic" src={poster_path} onClick={loadMovieDetails}></img>
            <div className="movie-btn" onClick={handleMenuToggle}>
                <img className="movie-btn-pic" src={MovieButton} />
                <div className="menu-dot-1" />
                <div className="menu-dot-2" />
                <div className="menu-dot-3" />
            </div>
            {isMenuActive &&
                <div className="movie-menu" ref={ref}>
                    <span className="close-small" onClick={handleMenuToggle}>&#x2715;</span>
                    <ul>
                        <li><a href="#" onClick={handleEditModal}>EDIT</a></li>
                        <li><a href="#" onClick={handleDeleteModal}>DELETE</a></li>
                    </ul>
                </div>
            }
            <div className="movie-info">
                <div className="name">{title}</div>
                <div className="year">{getYear(release_date)}</div>
                <div className="genre">{joinItems(genres)}</div>
            </div>
            {isDeleteActive && <DeleteMovieModal movieId={movieId} handleClose={handleDeleteModal} />}
            {isEditActive && <MovieModal movieId={movieId} handleClose={handleEditModal} />}
        </div>
    );
};

MovieItem.propTypes = {
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
};

MovieItem.defaultProps = {
    title: 'Empty name',
    release_date: 'Empty date',
    genres: [],
};