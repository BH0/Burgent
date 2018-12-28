import uuidv4 from "uuid/v4"; 
import { postItem } from "../api-calls/calls"; 

export const addItem = (state, item) => { 
    postItem(item); 
} 

export const generateId = (item) => {     
    return uuidv4(); 
}