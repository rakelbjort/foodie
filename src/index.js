import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as contentful from 'contentful';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

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
    console.log('her');
    entries.items.forEach(entry => {
      if (entry.fields) {
        console.log(JSON.stringify(entry.fields));
      }
    });
  });

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
