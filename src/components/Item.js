import React, { Component } from "react"; 
import { connect, dispatch } from "react-redux"; 

class Item extends Component { 
    state = { 
        purchaser: ""
    }

    handleChange = e => { 
        this.setState({
            [e.target.id]: e.target.value
        }); 
    }

    updatePurchaser = e => { 
        let itemId = this.refs.itemId.value; 
    }

    render() { 
        return (
            <div>
                <div className="columns"> 
                    <div className="column"> {this.props.item.name}</div> 
                    <div className="column"> {this.props.item.price}</div> 
                    <div className="column"> {this.props.item.source}</div> 
                    {/* if listOwner */} 
                    <div className="column">
                        <input onChange={e => this.handleChange(e)} type="text" id="purchaser" placeholder={this.props.item.purchaser} />
                        <input type="hidden" ref="itemId" value={this.props.item.key} /> 
                        <button onClick={e => this.updatePurchaser(e)}>U</button> 
                    </div> 
                </div> 
            </div>
        ); 
    }
}


export default connect(null, null)(Item); 
