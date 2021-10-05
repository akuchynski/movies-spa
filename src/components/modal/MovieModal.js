import React from "react";

const handleSubmit = (evt) => {
    evt.preventDefault();
    alert("Success!")
}

export const MovieModal = ({ handleClose, title }) => {
    return (
        <div className="modal">
            <div className="add-movie-modal">
                <span className="close" onClick={handleClose}>&#x2715;</span>
                <h2>{title}</h2>
                <form onSubmit={handleSubmit}>
                    <label className="modal-text">
                        TITLE
                        <input type="text" id="title" />
                    </label>
                    <label className="modal-text-short">
                        RELEASE DATE
                        <input type="text" />
                    </label>
                    <label className="modal-text">
                        MOVIE URL
                        <input type="text" />
                    </label>
                    <label className="modal-text-short">
                        RATING
                        <input type="text" />
                    </label>
                    <label className="modal-text">
                        GENRE
                        <input type="text" />
                    </label>
                    <label className="modal-text-short">
                        RUNTIME
                        <input type="text" />
                    </label>
                    <label className="modal-textarea">
                        OVERVIEW
                        <input type="textarea" />
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