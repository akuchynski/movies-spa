import axios from "axios";
import actions from "./actions";

const api = axios.create({
    baseURL: 'http://localhost:4000/movies/'
});

export const getMovies = () => (dispatch) => {
    dispatch(actions.getMoviesRequest());
    api.get('/')
        .then((response) => dispatch(actions.getMoviesSuccess(response.data)))
        .catch((error) => dispatch(actions.getMoviesError(error.message)));
};

export const getMoviesByGenre = (genre) => (dispatch) => {
    dispatch(actions.getMoviesRequest());
    api.get('/', genre !== 'All' && { params: { searchBy: 'genres', filter: genre } })
        .then((response) => dispatch(actions.getMoviesSuccess(response.data)))
        .catch((error) => dispatch(actions.getMoviesError(error.message)));
};

export const getMoviesByDate = () => (dispatch) => {
    dispatch(actions.getMoviesRequest());
    api.get('/', { params: { sortBy: 'release_date', sortOrder: 'desc' } })
        .then((response) => dispatch(actions.getMoviesSuccess(response.data)))
        .catch((error) => dispatch(actions.getMoviesError(error.message)));
};

export const getMoviesByRating = () => (dispatch) => {
    dispatch(actions.getMoviesRequest());
    api.get('/', { params: { sortBy: 'vote_average', sortOrder: 'desc' } })
        .then((response) => dispatch(actions.getMoviesSuccess(response.data)))
        .catch((error) => dispatch(actions.getMoviesError(error.message)));
};

export const getMovieById = (id) => (dispatch) => {
    dispatch(actions.getMovieRequest());
    api.get('/' + id)
        .then((response) => dispatch(actions.getMovieSuccess(response.data)))
        .catch((error) => dispatch(actions.getMovieError(error.message)));
};

export const addMovie = (movie) => (dispatch) => {
    movie.genres = movie.genres.map(item => item.value);
    api.post('/', movie)
        .then((response) => dispatch(actions.addMovieSuccess(response.data)))
        .catch((error) => dispatch(actions.addMovieError(error.message)));
};

export const updateMovie = (movieId, movie) => (dispatch) => {
    movie.id = movieId;
    movie.genres = movie.genres.map(item => item.value);
    api.put('/', movie)
        .then((response) => dispatch(actions.updateMovieSuccess(response.data)))
        .catch((error) => dispatch(actions.updateMovieError(error.message)));
};

export const deleteMovie = (id) => (dispatch) => {
    api.delete('/' + id)
        .then(() => dispatch(actions.deleteMovieSuccess()))
        .catch((error) => dispatch(actions.deleteMovieError(error.message)));
};