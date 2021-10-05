import React from "react";

const handleSubmit = (evt) => {
    evt.preventDefault();
    alert("Movie was modified!")
}

export const EditMovieModal = ({ handleClose }) => {
    return (
        <div className="modal">
            <div className="add-movie-modal">
                <span className="close" onClick={handleClose}>&#x2715;</span>
                <h2>EDIT MOVIE</h2>
                <form onSubmit={handleSubmit}>
                    <label className="modal-text">
                        TITLE
                        <input type="text" id="title" value="" onChange="" />
                    </label>
                    <label className="modal-text-short">
                        RELEASE DATE
                        <input type="text" value="" onChange="" />
                    </label>
                    <label className="modal-text">
                        MOVIE URL
                        <input type="text" value="" onChange="" />
                    </label>
                    <label className="modal-text-short">
                        RATING
                        <input type="text" value="" onChange="" />
                    </label>
                    <label className="modal-text">
                        GENRE
                        <input type="text" value="" onChange="" />
                    </label>
                    <label className="modal-text-short">
                        RUNTIME
                        <input type="text" value="" onChange="" />
                    </label>
                    <label className="modal-textarea">
                        OVERVIEW
                        <input type="textarea" value="" onChange="" />
                    </label>
                    <div className="modal-buttons">
                        <button className="submit-button">SUBMIT</button>
                        <button className="reset-button">RESET</button>
                    </div>
                </form>
            </div>
        </div>
    );
};