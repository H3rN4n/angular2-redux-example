// import {
//   applyMiddleware,
//   Store,
//   combineReducers,
//   compose,
//   createStore
// } from 'redux';

import * as redux from 'redux';
//import { reduxLogger } from 'redux-logger';

function moviesReducer(state = 'soy el reducer', action) {
    switch (action.type) {
        case 'concat': return state + action.payload;
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
