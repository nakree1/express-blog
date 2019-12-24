import React from 'react';
import { storiesOf } from '@storybook/react';
import Menu from '../src/components/shared/wrappers/header/menu/Menu';

const noOp = () => {
};

const prefix = 'Dropdown|';

storiesOf(`${prefix}Header/Account`)
  .add('Default', () => <Menu isOpen={true} anchorEl={null}/>)


