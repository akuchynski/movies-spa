import React from "react";

export const DeleteMovieModal = ({ handleClose }) => {
    return (
        <div className="modal">
            <div className="delete-movie-modal">
                <span className="close" onClick={handleClose}>&#x2715;</span>
                <h2>DELETE MOVIE</h2>
                <div className="delete-text">Are you sure you want to delete this movie?</div>
                <div className="modal-button">
                    <button className="submit-button" onClick={handleClose}>CONFIRM</button>
                </div>
            </div>
        </div>
    );
};