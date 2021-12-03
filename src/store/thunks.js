import axios from "axios";
import actions from "./actions";

const api = axios.create({
    baseURL: process.env.SERVER_URL
});

export const getMovies = () => (dispatch) => {
    dispatch(actions.getMoviesRequest());
    api.get('/')
        .then(({ data }) => dispatch(actions.getMoviesSuccess(data)))
        .catch(({ message }) => dispatch(actions.getMoviesError(message)));
};

export const getMoviesByGenre = (genre) => (dispatch) => {
    dispatch(actions.getMoviesRequest());
    api.get('/', genre !== 'All' && { params: { searchBy: 'genres', filter: genre } })
        .then(({ data }) => dispatch(actions.getMoviesSuccess(data)))
        .catch(({ message }) => dispatch(actions.getMoviesError(message)));
};

export const getMoviesByDate = () => (dispatch) => {
    dispatch(actions.getMoviesRequest());
    api.get('/', { params: { sortBy: 'release_date', sortOrder: 'desc' } })
        .then(({ data }) => dispatch(actions.getMoviesSuccess(data)))
        .catch(({ message }) => dispatch(actions.getMoviesError(message)));
};

export const getMoviesByRating = () => (dispatch) => {
    dispatch(actions.getMoviesRequest());
    api.get('/', { params: { sortBy: 'vote_average', sortOrder: 'desc' } })
        .then(({ data }) => dispatch(actions.getMoviesSuccess(data)))
        .catch(({ message }) => dispatch(actions.getMoviesError(message)));
};

export const getMoviesByParams = (searchQuery, genreQuery, sortQuery, sortOrder = 'desc') => (dispatch) => {
    dispatch(actions.getMoviesRequest());
    api.get('/', { params: { searchBy: 'title', search: searchQuery, filter: genreQuery, sortBy: sortQuery, sortOrder: sortOrder } })
        .then(({ data }) => dispatch(actions.getMoviesSuccess(data)))
        .catch(({ message }) => dispatch(actions.getMoviesError(message)));
};

export const getMovieById = (id) => (dispatch) => {
    dispatch(actions.getMovieRequest());
    api.get('/' + id)
        .then(({ data }) => dispatch(actions.getMovieSuccess(data)))
        .catch(({ message }) => dispatch(actions.movieError(message)));
};

export const addMovie = (movie) => (dispatch) => {
    api.post('/', movie)
        .catch(({ message }) => dispatch(actions.movieError(message)));
};

export const updateMovie = (movie) => (dispatch) => {
    api.put('/', movie)
        .catch(({ message }) => dispatch(actions.movieError(message)));
};

export const deleteMovie = (id) => (dispatch) => {
    api.delete('/' + id)
        .catch(({ message }) => dispatch(actions.movieError(message)));
};