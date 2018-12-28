import * as firebase from 'firebase'; 
import { dispatch } from "react-redux"; 

const config = {
    apiKey: "AIzaSyDt7fOLc0bWhLv42b1o3-N8s8A9zoSdJZo",
    authDomain: "burgent0.firebaseapp.com",
    databaseURL: "https://burgent0.firebaseio.com",
    projectId: "burgent0",
    storageBucket: "",
    messagingSenderId: "212091863147"
};

firebase.initializeApp(config);

const ref = firebase.database().ref();

export const postItem = (item) => { 
    ref.push(item); 
}  
