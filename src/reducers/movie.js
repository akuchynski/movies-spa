import actionTypes from "../store/actionTypes";

const initialState = {
    isLoading: false,
    movies: null,
    movieDetails: null,
    activeFilter: null,
    errorMessage: null
};

export const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_MOVIES_REQUEST:
            return {
                ...state,
                isLoading: true,
                movies: null,
                errorMessage: null
            };
        case actionTypes.GET_MOVIES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                movies: action.payload.data
            };
        case actionTypes.GET_MOVIES_ERROR:
            return {
                ...state,
                isLoading: false,
                errorMessage: action.payload
            };
        case actionTypes.GET_MOVIE_REQUEST:
            return {
                ...state,
                movieDetails: null,
                errorMessage: null
            };
        case actionTypes.GET_MOVIE_SUCCESS:
            return {
                ...state,
                movieDetails: action.payload
            };
        case actionTypes.GET_MOVIE_ERROR:
            return {
                ...state,
                errorMessage: action.payload
            };
        case actionTypes.CLOSE_MOVIE_DETAILS:
            return {
                ...state,
                movieDetails: null
            };
        case actionTypes.SET_ACTIVE_FILTER:
            return {
                ...state,
                activeFilter: action.payload
            };
        default:
            return state;
    }
};