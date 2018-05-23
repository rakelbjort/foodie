import React from 'react';
import ReactDOM from 'react-dom';
import * as contentful from 'contentful';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let data = '';
var client = contentful.createClient({
  space: 'ifxfj736xke9',
  accessToken:
    '66d3883c10bf3366b9833ce4c5577ac2c6aeef69e48984f404b2643d437e44ed'
});
client
  .getEntries({
    content_type: 'singlePost'
  })
  .then(entries => {
    entries.items.forEach(entry => {
      if (entry.fields) {
        data = entry.fields;
        console.log(JSON.stringify(data));
        ReactDOM.render(<App {...data} />, document.getElementById('root'));
        registerServiceWorker();
      }
    });
  });
