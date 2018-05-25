import React from 'react';

import { storiesOf } from '@storybook/react';

import TextLink from '.';

storiesOf('Links', module).add('TextLink #1', () => (
  <div className="link-container">
    <TextLink endpoint="/">Sjá nánar</TextLink>
  </div>
));
