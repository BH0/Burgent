import * as firebase from 'firebase'; 

import types  from "../reduxActionTypes.js"; 

export const addItem = (item) => { 
    return { 
        type: types.addItem, 
        item: item
    } 
} 

export const updatePurchaser = (purchaserName, itemId) => { 
    return { 
        type: types.updatePurchaser, 
        purchaser: purchaserName,
        itemId: itemId
    }
}
