import React, { Component } from 'react';

import logo from './logo.svg';
import Article from './components/Article';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Article />
      </div>
    );
  }
}

export default App;
