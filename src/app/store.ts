// import {
//   applyMiddleware,
//   Store,
//   combineReducers,
//   compose,
//   createStore
// } from 'redux';

import * as redux from 'redux';
import * as immutable from 'immutable';

const moviesInitialState = {
    data: [
        {
            'title': 'Batman'
        },
        {
            'title': 'Rocky'
        },
        {
            'title': 'La Momia'
        }
    ]
};
function addMovie(state, action) {
    const newState = [].concat(state.data);
    newState.push(action.payload);
    return {data: newState};
}

function removeMovie(state, action) {
    const index = state.data.indexOf(action.payload);
    console.log(index);
    state.data.splice(index, 1);
    return state;
}

function moviesReducer(state = moviesInitialState, action) {

    //const newState = immutable.Map(state);

    switch (action.type) {
        case 'add': return addMovie(state, action);
        case 'remove': return removeMovie(state, action);
        default: return state;
    }
};

export const rootReducer = redux.combineReducers<any>({
    movies: moviesReducer
});

// export const store: redux.Store<IAppState> = redux.createStore(
//     rootReducer,
//     redux.compose()
// );
