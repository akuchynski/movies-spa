import React from "react";
import PropTypes from 'prop-types'

export default function MovieItem({ name, year, genre, image}) {
    return (
        <div className="item">
            <img className="movie-pic" src={require("../assets/images/" + image)}></img>
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