import actionTypes from "./actionTypes";

const getMoviesRequest = () => ({
    type: actionTypes.GET_MOVIES_REQUEST,
});

const getMoviesSuccess = (movies) => ({
    type: actionTypes.GET_MOVIES_SUCCESS,
    payload: movies
});

const getMoviesError = (errorMessage) => ({
    type: actionTypes.GET_MOVIES_ERROR,
    payload: errorMessage
});

const getMovieRequest = () => ({
    type: actionTypes.GET_MOVIE_REQUEST,
});

const getMovieSuccess = (movie) => ({
    type: actionTypes.GET_MOVIE_SUCCESS,
    payload: movie
});

const getMovieError = (errorMessage) => ({
    type: actionTypes.GET_MOVIE_ERROR,
    payload: errorMessage
});

const closeMovieDetails = () => ({
    type: actionTypes.CLOSE_MOVIE_DETAILS,
});

const setActiveFilter = (value) => ({
    type: actionTypes.SET_ACTIVE_FILTER,
    payload: value
});

export default {
    getMoviesRequest,
    getMoviesSuccess,
    getMoviesError,
    getMovieRequest,
    getMovieSuccess,
    getMovieError,
    closeMovieDetails,
    setActiveFilter,
};