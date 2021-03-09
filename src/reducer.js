import * as actions from './actionTypes'

let lastId = 0;


// function reducer(state= [], action){
//     if(action.type === 'bugAdded')
//     return [
//         ...state,
//         {
//             id: ++lastId,
//             description : action.payload.description,
//             resolved: false
//         }
//     ]
//     else if(action.Type == 'bugRemoved'){
//         return state.filter(function(item){return item.id !== action.payload.id})
//     }
//     else{
//         return state;
//     }
// }

// export default function reducer(state= [], action){
//     switch(action.type){
//         case "bugAdde":
//             return [
//                 ...state,
//                 {
//                     id: ++lastId,
//                     description : action.payload.description,
//                     resolved: false
//                 }
//             ];
//         case "bugRemoved":
//             return state.filter(bug => bug.id !== action.payload.id);
//         default:
//             return state;
//     }
// }

export default function reducer(state= [], action){
    switch(action.type){
        case actions.BUG_ADDED:
            return [
                ...state,
                {
                    id: ++lastId,
                    description : action.payload.description,
                    resolved: false
                }
            ];
        case actions.BUG_REMOVED:
            return state.filter(bug => bug.id !== action.payload.id);
        default:
            return state;
    }
}