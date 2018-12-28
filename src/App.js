
import React, { Component } from 'react';

// App Components 
import AddItem from "./components/AddItem"; 

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="has-text-centered"> 
          Burgent 
        </h1> 
        <br /> 
        <AddItem /> 
      </div>
    );
  }
}

export default App;
