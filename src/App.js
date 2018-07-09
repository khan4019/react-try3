import React, { Component } from 'react';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header></Header>
          <Shop></Shop>
      </div>
    );
  }
}

export default App;
