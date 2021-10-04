import React from "react";
import PropTypes from 'prop-types'
import MovieButton from '../assets/images/movie-menu-btn.png'

export default function MovieItem({ name, year, genre, image }) {
    return (
        <div className="item">
            <img className="movie-pic" src={require("../assets/images/" + image)}></img>
            <div className="movie-btn">
                <img className="movie-btn-pic" src={MovieButton}></img>
                <div className="menu-dot-1"></div>
                <div className="menu-dot-2"></div>
                <div className="menu-dot-3"></div>
            </div>
            <div className="movie-menu">
                <span class="close-small">&#x2715;</span>
                <ul>
                    <li><a href="#">EDIT</a></li>
                    <li><a href="#">DELETE</a></li>
                </ul>
            </div>
            <div className="movie-info">
                <div className="name">{name}</div>
                <div className="year">{year}</div>
                <div className="genre">{genre}</div>
            </div>
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