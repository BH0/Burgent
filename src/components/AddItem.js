import React, { Component } from "react"; 
import { connect, dispatch } from  "react-redux"; 

import  { addItem } from "../actions/itemActions"; 

import  { generateId } from "../utils/utils"; 

class AddItem extends Component { 
    state = { 
        name: null, 
        price: null, 
        source: null, 
        purchaser: "" 
    } 

    handleSubmit = e => { 
        e.preventDefault(); 
        let item = this.state; 
        this.props.addItem(item); 
    } 

    handleChange = e => { 
        this.setState({ 
            [e.target.id]: e.target.value
        }); 
    }

    render() { 
        return ( 
            <div> 
                <form onSubmit={this.handleSubmit}> 
                    <div className="columns"> 
                        <div className="column"> 
                            <input type="text" placeholder="Item Name" id="name" onChange={this.handleChange}/> 
                        </div> 
                        <div className="column"> 
                            <input type="text" placeholder="Price" id="price" onChange={this.handleChange} /> 
                        </div> 
                        <div className="column"> 
                            <input type="text" placeholder="Source-location" id="source" onChange={this.handleChange} /> 
                            <input type="submit" value="Add" />   
                        </div> 
                    </div> 
                </form> 
            </div> 
        ); 
    } 
}

const mapDispatchToProps = dispatch => {
     return { 
        addItem: item => dispatch(addItem(item)) 
    }
}

export default connect(null, mapDispatchToProps)(AddItem); 
