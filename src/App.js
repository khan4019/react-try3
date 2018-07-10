import React, { Component } from 'react';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Review from './components/Review/Review';
import Orders from './components/Orders/Orders';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header></Header>
          <Router>
            <div>
              <Route exact path="/" component={Shop}/>    
              <Route path="/shop" component={Shop}/>    
              <Route path="/review" component={Review}/>    
              <Route path="/orders" component={Orders}/>    
            </div>
          </Router>          
      </div>
    );
  }
}

export default App;
