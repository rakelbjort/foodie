import React from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

// TODO: Switch to using Link instead of router
function TextLink(props) {
  return (
    <a href={props.endpoint} className="text-link">
      {props.children}
    </a>
  );
}

export default TextLink;
