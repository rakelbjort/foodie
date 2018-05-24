import React from 'react';

import { storiesOf } from '@storybook/react';

import BlogItem from '.';
import RESONSE from './mockData';

storiesOf('Blog', module).add('item', () => <BlogItem data={RESONSE} />);
