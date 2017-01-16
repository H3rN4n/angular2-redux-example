import { ActionReducer, Action } from '@ngrx/store';
import { Movie } from './models/movie';

export const ADD_MOVIE = 'ADD_MOVIE';
export const REMOVE_MOVIE = 'REMOVE_MOVIE';
export const SET_MOVIE_LIST = 'SET_MOVIE_LIST';

function addMovie(state, action) {
    let newState = Object.assign({}, state);
    newState[action.payload.id] = action.payload;
    return newState;
}

function removeMovie(state, action) {
    let newState = Object.assign({}, state);
    delete newState[action.payload.key];
    return newState;
}

function setMovies(state, action) {
    let movies = action.payload;
    let newState = Object.assign({}, movies);
    return newState;
}

export function moviesReducer(state: Movie[] = [], action: Action) {
    switch (action.type) {
        case ADD_MOVIE:
            return addMovie(state, action);

        case REMOVE_MOVIE:
            return removeMovie(state, action);

        case SET_MOVIE_LIST:
            return setMovies(state, action);

        default:
            return state;
    }
}
