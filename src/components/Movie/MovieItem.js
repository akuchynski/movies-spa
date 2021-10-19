import React, { useState, useContext } from "react";
import PropTypes from 'prop-types';
import { DeleteMovieModal } from "../Modal/DeleteMovie";
import { MovieModal } from "../Modal/MovieModal";
import { AppContext } from "../App";
import { useClickOutside } from "../../hooks/useClickOutside";
import MovieButton from '../../assets/images/movie-menu-btn.png';

export const MovieItem = ({ movieId, name, year, genre, image }) => {
    const [isMenuActive, setMenuActive] = useState(false);
    const [isEditActive, setEditActive] = useState(false);
    const [isDeleteActive, setDeleteActive] = useState(false);

    const { movieItem } = useContext(AppContext);
    const [movie, handleMovieId] = movieItem;

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
            <img className="movie-pic" src={require("../../assets/images/" + image)} onClick={() => handleMovieId(movieId)}></img>
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
                <div className="name">{name}</div>
                <div className="year">{year}</div>
                <div className="genre">{genre}</div>
            </div>
            {isDeleteActive && <DeleteMovieModal handleClose={handleDeleteModal} />}
            {isEditActive && <MovieModal handleClose={handleEditModal} title={"EDIT MOVIE"} />}
        </div>
    )
}

MovieItem.propTypes = {
    name: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
}

MovieItem.defaultProps = {
    name: 'Empty name',
    year: 0,
    genre: 'Empty genre',
}