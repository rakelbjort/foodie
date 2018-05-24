import React, { Component } from 'react';
import BlogItem from '../../components/BlogItem';

export default class SingleBlogItem extends Component {
  render() {
    return (
      <div>
        <BlogItem data={this.props} />
      </div>
    );
  }
}
