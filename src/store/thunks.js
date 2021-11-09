import axios from "axios";
import actions from "./actions";

export const getMovies = () => (dispatch) => {
    dispatch(actions.getMoviesRequest());
    axios.get('http://localhost:4000/movies')
        .then((response) => dispatch(actions.getMoviesSuccess(response.data)))
        .catch((error) => dispatch(actions.getMoviesError(error.message)));
};

export const getMoviesByGenre = (genre) => (dispatch) => {
    dispatch(actions.getMoviesRequest());
    axios.get('http://localhost:4000/movies', genre !== 'ALL' && { params: { searchBy: 'genres', filter: genre } })
        .then((response) => dispatch(actions.getMoviesSuccess(response.data)))
        .catch((error) => dispatch(actions.getMoviesError(error.message)));
};

export const getMoviesByDate = () => (dispatch) => {
    dispatch(actions.getMoviesRequest());
    axios.get('http://localhost:4000/movies?sortBy=release_date&sortOrder=desc')
        .then((response) => dispatch(actions.getMoviesSuccess(response.data)))
        .catch((error) => dispatch(actions.getMoviesError(error.message)));
};

export const getMoviesByRating = () => (dispatch) => {
    dispatch(actions.getMoviesRequest());
    axios.get('http://localhost:4000/movies?sortBy=vote_average&sortOrder=desc')
        .then((response) => dispatch(actions.getMoviesSuccess(response.data)))
        .catch((error) => dispatch(actions.getMoviesError(error.message)));
};

export const getMovieById = (id) => (dispatch) => {
    dispatch(actions.getMovieRequest());
    axios.get('http://localhost:4000/movies/' + id)
        .then((response) => dispatch(actions.getMovieSuccess(response.data)))
        .catch((error) => dispatch(actions.getMovieError(error.message)));
};

export const addMovie = (movie) => (dispatch) => {
    movie.genres = movie.genres.map(item => item.value);
    axios.post('http://localhost:4000/movies', movie)
        .then((response) => dispatch(actions.addMovieSuccess(response.data)))
        .catch((error) => dispatch(actions.addMovieError(error.message)));
};

export const updateMovie = (movieId, movie) => (dispatch) => {
    movie.id = movieId;
    movie.genres = movie.genres.map(item => item.value);
    axios.put('http://localhost:4000/movies', movie)
        .then((response) => dispatch(actions.updateMovieSuccess(response.data)))
        .catch((error) => dispatch(actions.updateMovieError(error.message)));
};

export const deleteMovie = (id) => (dispatch) => {
    axios.delete('http://localhost:4000/movies/' + id)
        .then(() => dispatch(actions.deleteMovieSuccess()))
        .catch((error) => dispatch(actions.deleteMovieError(error.message)));
};