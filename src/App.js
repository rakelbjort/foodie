import React, { Component } from 'react';

import Article from './components/Article';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Article data={this.props} />
      </div>
    );
  }
}

export default App;
