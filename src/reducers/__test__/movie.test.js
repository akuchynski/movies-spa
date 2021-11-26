import { movieReducer } from "../../reducers/movie";
import actions from "../../store/actions";
import { movies, movie } from "../../utils/setMockData";

describe('movie reducer tests', () => {

    let initialState;

    beforeEach(() => {
        initialState = {
            isLoading: false,
            isDetailsOpen: false,
            movies: null,
            movieDetails: null,
            activeFilter: null,
            errorMessage: null
        };
    });

    it('should perform movies request action', () => {
        const action = actions.getMoviesRequest();
        const newState = movieReducer(initialState, action);
        expect(newState.isLoading).toBe(true);
    });

    it('should perform movies success action', () => {
        const action = actions.getMoviesSuccess(movies);
        const newState = movieReducer(initialState, action);
        expect(newState.movies).toBe(movies.data);
    });

    it('should perform movies error action', () => {
        const errorMessage = "Test movies error";
        const action = actions.getMoviesError(errorMessage);
        const newState = movieReducer(initialState, action);
        expect(newState.errorMessage).toBe(errorMessage);
    });

    it('should perform movie request action', () => {
        const errorMessage = "Test movies error";
        const action = actions.getMovieRequest();
        const newState = movieReducer({ ...initialState, movieDetails: movie, errorMessage: errorMessage }, action);
        expect(newState.movieDetails).toBeNull();
        expect(newState.errorMessage).toBeNull();
    });

    it('should perform movie success action', () => {
        const action = actions.getMovieSuccess(movie);
        const newState = movieReducer(initialState, action);
        expect(newState.movieDetails).toBe(movie);
    });

    it('should perform movie error action', () => {
        const errorMessage = "Test movie error";
        const action = actions.movieError(errorMessage);
        const newState = movieReducer(initialState, action);
        expect(newState.errorMessage).toBe(errorMessage);
    });

    it('should perform open movie details action', () => {
        const action = actions.openMovieDetails();
        const newState = movieReducer(initialState, action);
        expect(newState.isDetailsOpen).toBe(true);
    });

    it('should perform close movie details action', () => {
        const action = actions.closeMovieDetails();
        const newState = movieReducer({ ...initialState, movieDetails: movie, isDetailsOpen: true }, action);
        expect(newState.isDetailsOpen).toBe(false);
        expect(newState.movieDetails).toBeNull();
    });

    it('should set new active filter', () => {
        const filter = "Horror";
        const action = actions.setActiveFilter(filter);
        const newState = movieReducer(initialState, action);
        expect(newState.activeFilter).toBe(filter);
    });

});