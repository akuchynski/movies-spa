import actionTypes from "../store/actionTypes";

const initialState = {
    isLoading: false,
    isDetailsOpen: false,
    movies: null,
    movieDetails: null,
    activeFilter: null,
    errorMessage: null
};

const {
    GET_MOVIES_REQUEST,
    GET_MOVIES_SUCCESS,
    GET_MOVIES_ERROR,
    GET_MOVIE_REQUEST,
    GET_MOVIE_SUCCESS,
    MOVIE_ERROR,
    OPEN_MOVIE_DETAILS,
    CLOSE_MOVIE_DETAILS,
    SET_ACTIVE_FILTER,
} = actionTypes;

export const movieReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_MOVIES_REQUEST:
            return {
                ...state,
                isLoading: true,
                movies: null,
                errorMessage: null
            };
        case GET_MOVIES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                movies: payload.data
            };
        case GET_MOVIES_ERROR:
            return {
                ...state,
                isLoading: false,
                errorMessage: payload
            };
        case GET_MOVIE_REQUEST:
            return {
                ...state,
                movieDetails: null,
                errorMessage: null
            };
        case GET_MOVIE_SUCCESS:
            return {
                ...state,
                movieDetails: payload
            };
        case MOVIE_ERROR:
            return {
                ...state,
                errorMessage: payload
            };
        case OPEN_MOVIE_DETAILS:
            return {
                ...state,
                isDetailsOpen: true
            };
        case CLOSE_MOVIE_DETAILS:
            return {
                ...state,
                isDetailsOpen: false,
                movieDetails: null
            };
        case SET_ACTIVE_FILTER:
            return {
                ...state,
                activeFilter: payload
            };
        default:
            return state;
    }
};