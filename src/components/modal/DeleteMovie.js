import React from "react";

class DeleteMovieForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleConfirm = this.handleConfirm.bind(this);
    }

    handleConfirm(event) {
        alert('Movie was deleted!');
        event.preventDefault();
    }

    render() {
        return (
            <div className="delete-movie-modal">
                <span class="close">&#x2715;</span>
                <h2>DELETE MOVIE</h2>
                <div className="delete-text">Are you sure you want to delete this movie?</div>
                <div className="modal-button">
                    <button className="submit-button" onClick={this.handleConfirm}>CONFIRM</button>
                </div>
            </div>
        );
    }
}

export default DeleteMovieForm;