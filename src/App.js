import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import SingleBlogItem from './views/SingleBlogItem';
import Home from './views/Home';

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/blog"
          render={props => <SingleBlogItem {...this.props} />}
        />
      </Switch>
    );
  }
}
