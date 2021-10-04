import React from "react";

class EditMovieForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('Movie was modified: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div className="add-movie-modal">
                <span class="close">&#x2715;</span>
                <h2>EDIT MOVIE</h2>
                <form onSubmit={this.handleSubmit}>
                    <label className="modal-text">
                        TITLE
                        <input type="text" id="title" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <label className="modal-text-short">
                        RELEASE DATE
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <label className="modal-text">
                        MOVIE URL
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <label className="modal-text-short">
                        RATING
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <label className="modal-text">
                        GENRE
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <label className="modal-text-short">
                        RUNTIME
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <label className="modal-textarea">
                        OVERVIEW
                        <input type="textarea" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <div className="modal-buttons">
                        <button className="submit-button">SUBMIT</button>
                        <button className="reset-button">RESET</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default EditMovieForm;