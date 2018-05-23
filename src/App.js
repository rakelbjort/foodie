import React, { Component } from 'react';

import logo from './logo.svg';
import Article from './components/Article';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    // console.log('app data', this.props);
    return (
      <div className="App">
        <Article data={this.props} />
      </div>
    );
  }
}

export default App;
