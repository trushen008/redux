import { bindActionCreators } from "redux";


import * as actions from './actionTypes'

export const bugAdded = description => ({
    type: actions.BUG_ADDED,
            payload:{
                description: "Bug 1"
            } 

})


// export function bugAdded(description){
//     return {
//         type: actions.BUG_ADDED,
//         payload:{
//             description: description
//         }
//     }
// }