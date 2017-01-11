// import {
//   applyMiddleware,
//   Store,
//   combineReducers,
//   compose,
//   createStore
// } from 'redux';

import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import * as redux from 'redux';
import * as immutable from 'immutable';

// const moviesInitialState = {
//     data: [
//         {
//             'title': 'Batman'
//         },
//         {
//             'title': 'Rocky'
//         },
//         {
//             'title': 'La Momia'
//         }
//     ]
// };

// @Injectable()
// export class MoviesActions {
//     constructor(private redux: NgRedux<any>, public moviesService: MoviesService) { }

    
// }

export function moviesReducer(state = {}, action) {

    //const newState = immutable.Map(state);

    function addMovie(state, action) {
        const newState = [].concat(state.data);
        newState.push(action.payload);
        return { data: newState };
    }

    function removeMovie(state, action) {
        const index = state.data.indexOf(action.payload);
        state.data.splice(index, 1);
        return state;
    }

    function setMovies(state, action) {
        let movies = action.payload;
        let newState = Object.assign({}, movies);
        return newState;
    }

    //console.log(action);
    switch (action.type) {
        case 'add': return addMovie(state, action);
        case 'remove': return removeMovie(state, action);
        case 'setMovies': return setMovies(state, action);
        default: return state;
    }
};

export const rootReducer = redux.combineReducers<any>({
    movies: moviesReducer
});