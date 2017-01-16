// import {
//   applyMiddleware,
//   Store,
//   combineReducers,
//   compose,
//   createStore
// } from 'redux';

import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { routerReducer } from 'ng2-redux-router';
import * as redux from 'redux';
//import * as immutable from 'immutable';

// @Injectable()
// export class MoviesActions {
//     constructor(private redux: NgRedux<any>, public moviesService: MoviesService) { }
// }

export function moviesReducer(state = {}, action) {

    //const newState = immutable.Map(state);

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

    switch (action.type) {
        case 'add': return addMovie(state, action);
        case 'remove': return removeMovie(state, action);
        case 'setMovies': return setMovies(state, action);
        default: return state;
    }
};

export function currentMovieReducer(state = {}, action) {

    function setMovie(state, action) {
        let movies = action.payload;
        let newState = Object.assign({}, movies);
        return newState;
    }

    function saveMovieEdition(state, action){
        console.log(state, action);
        state = Object.assign({},action.payload)
        return state;
    }

    switch (action.type) {
        case 'setCurrentMovie': return setMovie(state, action);
        //case 'cancelMovieEdition': return cancelMovieEdition(state, action);
        case 'saveMovieEdition': return saveMovieEdition(state, action);
        default: return state;
    }
};

export const rootReducer = redux.combineReducers<any>({
    movies: moviesReducer,
    currentMovie: currentMovieReducer,
    router: routerReducer
});