import React from "react";
import { useClickOutside } from "../../hooks/useClickOutside";
import { useDispatch, batch } from "react-redux";
import { deleteMovie, getMovies } from "../../store/thunks";
import actions from "../../store/actions";

export const DeleteMovieModal = ({ handleClose, movieId }) => {

    const ref = useClickOutside(handleClose);

    const dispatch = useDispatch();

    const handleDelete = () => {
        batch(() => {
            dispatch(deleteMovie(movieId));
            dispatch(actions.closeMovieDetails);
            dispatch(getMovies());
        });
        handleClose();
    };

    return (
        <div className="modal">
            <div className="delete-movie-modal" ref={ref}>
                <span className="close" onClick={handleClose}>&#x2715;</span>
                <h2>DELETE MOVIE</h2>
                <div className="delete-text">Are you sure you want to delete this movie?</div>
                <form>
                    <div className="modal-button">
                        <button className="submit-button" onClick={handleDelete}>CONFIRM</button>
                    </div>
                </form>
            </div>
        </div>
    );
};