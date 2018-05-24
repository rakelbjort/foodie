import React from 'react';
import PropTypes from 'prop-types';
import * as Markdown from 'react-markdown';

import './index.scss';

const BlogItem = props => {
  const { data } = props;
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-8">
          <h1>{data.title}</h1>
          <p>{data.abstract}</p>
          <Markdown source={data.content} />
        </div>
      </div>
    </div>
  );
};

BlogItem.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    abstract: PropTypes.string,
    content: PropTypes.string
  })
};
BlogItem.defaultProps = {
  data: {
    title: 'TEST',
    abstract: 'TEST',
    content: 'TEST'
  }
};

export default BlogItem;
