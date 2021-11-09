import actionTypes from "../store/actionTypes";

const initialState = {
    isLoading: false,
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
    GET_MOVIE_ERROR,
    CLOSE_MOVIE_DETAILS,
    SET_ACTIVE_FILTER,
    ADD_MOVIE_SUCCESS,
    ADD_MOVIE_ERROR,
    DELETE_MOVIE_SUCCESS,
    DELETE_MOVIE_ERROR,
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
        case GET_MOVIE_ERROR:
            return {
                ...state,
                errorMessage: payload
            };
        case CLOSE_MOVIE_DETAILS:
            return {
                ...state,
                movieDetails: null
            };
        case SET_ACTIVE_FILTER:
            return {
                ...state,
                activeFilter: payload
            };
        case ADD_MOVIE_SUCCESS:
            return {
                ...state
            };
        case ADD_MOVIE_ERROR:
            return {
                ...state,
                errorMessage: payload
            };
        case DELETE_MOVIE_SUCCESS:
            return {
                ...state
            };
        case DELETE_MOVIE_ERROR:
            return {
                ...state,
                errorMessage: payload
            };
        default:
            return state;
    }
};