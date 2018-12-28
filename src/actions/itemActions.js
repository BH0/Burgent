import * as firebase from 'firebase'; 

import types  from "../reduxActionTypes.js"; 

export const addItem = (item) => { 
    return { 
        type: types.addItem, 
        item: item
    } 
} 
