import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const Article = props => {
  const { data } = props;
  return (
    <div>
      <h1>{data.title}</h1>
    </div>
  );
};

Article.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string
  })
};
Article.defaultProps = {
  data: {
    title: 'TEST'
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
