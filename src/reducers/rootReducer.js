import * as firebase from 'firebase'; 

/// Utillities 
import { addItem } from "../utils/utils"; 

/// API Calls 
import { updateItem } from "../api-calls/calls"; 

/// Redux Action Types 
import types  from "../reduxActionTypes"; 

const initialState = { 
    items: [] 
} 

const rootReducer = (state = initialState, action) => { 
    switch (action.type) { 
        case types.getItems: 
            return { 
                ...state, 
                items: action.payload
            }             
            break; 
        case types.addItem: 
            addItem(state, action.item); 
            return { 
                ...state, 
                items: [...state.items, action.item]
            } 
            break; 
        case types.updatePurchaser: 
            updateItem(action); 
            return state; 
        default: 
            return state; 
        } 
} 

export default rootReducer; 
