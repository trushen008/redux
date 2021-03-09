// console.log("Hello World!");

import { bindActionCreators } from 'redux';
import store from './store';
import {bugAdded }from './actions'
// import * as actions from './actionTypes'



const unsubscribe = store.subscribe(() => {
    console.log("store chnaged", store.getState());
})


// store.dispatch({
//     type: actions.BUG_ADDED,
//     payload: {
//         description: "Bug1"
//     }

// })

// unsubscribe();

// store.dispatch({
//     type:actions.BUG_REMOVED,
//     payload: {
//         id:1
//     }
// })



store.dispatch(bugAdded("Bug 1"));

unsubscribe();

// store.dispatch({
//     type:actions.BUG_REMOVED,
//     payload: {
//         id:1
//     }
// })

console.log(store.getState());