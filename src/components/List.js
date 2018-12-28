import React, { Component } from "react"; 
import { connect, dispatch } from "react-redux"; 
import * as firebase from 'firebase'; 

import { getItems } from "../api-calls/calls.js"; 

import Item from "./Item"; 

class List extends Component { 
    state = { 
        items: [], 
    }

    componentDidMount() { 
        getItems(this.props.receiveItems); 
    }

    render() { 
        let items = this.props.items.map(item => { 
            return (
                <Item key={item.id} item={item} /> 
            ); 
        }); 
        return ( 
            <div className="list"> 
                 {items} 
            </div> 
        )
    } 
} 

const receiveItemsActionCreator = items => ({ type: 'GET_ITEMS', payload: items });

const mapDispatchToProps = dispatch => {  
    return { 
        receiveItems: items => dispatch(receiveItemsActionCreator(items)), // retrieves data from Firebase 
    } 
} 

const mapStateToProps = state => { 
    return { 
        items: state.items, 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List); 

