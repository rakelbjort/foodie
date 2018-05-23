import React from 'react';

import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';

import Article from '.';
import RESONSE from './mockData';

storiesOf('Welcome', module).add('to Storybook', () => (
  <Article data={RESONSE} />
));
