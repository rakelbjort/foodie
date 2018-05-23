import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import '../src/styles/styles.scss';

const req = require.context('../src', true, /\.story\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
