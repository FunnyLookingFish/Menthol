import {useReducer} from 'react';

export function reducer(state, action){
    switch(action.type){
        //Different cases go here
        case 'ADD_ITEM_TO_CAT': return 
        default: return state;
    };
};

export default function useStateReducer(initialState){
    return useReducer(reducer, initialState)
}