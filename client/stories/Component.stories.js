import React from 'react';
import { storiesOf } from '@storybook/react';
import Profile from '../src/components/shared/wrappers/header/Profile';

const noOp = () => {
};

const prefix = 'Component|';

storiesOf(`${prefix}Header/Profile`)
  .add('Default', () => <Profile profile={{ username: "nakree" }}/>)


