import React from 'react';
import PropTypes from 'prop-types';
import Marked from 'marked';

import './index.scss';

const Article = props => {
  const { data } = props;
  //   console.log(props);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-4">
          <h1>{data.title}</h1>
          <p>{data.abstract}</p>
          <div dangerouslySetInnerHTML={{ __html: Marked(data.content) }} />
        </div>
      </div>
    </div>
  );
};

Article.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    abstract: PropTypes.string,
    content: PropTypes.string
  })
};
Article.defaultProps = {
  data: {
    title: 'TEST',
    abstract: 'TEST',
    content: 'TEST'
  }
};

// ComparisonTable.propTypes = {
//     // eslint-disable-next-line react/forbid-prop-types
//     items: PropTypes.array,
//     // eslint-disable-next-line react/forbid-prop-types
//     primary: PropTypes.object,
//     slice_type: PropTypes.string,
//     lang: PropTypes.string.isRequired,
//   };

//   ComparisonTable.defaultProps = {
//     items: [],
//     primary: {},
//     slice_type: '',
//   };

export default Article;
