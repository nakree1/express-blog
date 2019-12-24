import React from 'react';
import { storiesOf } from '@storybook/react';
import { Template as SignUpModal } from '../src/components/modal/SignUpModal';
import { Template as LoginModal } from '../src/components/modal/LoginModal';

const noOp = () => {
};

const prefix = 'Modal|';

storiesOf(`${prefix}Login`)
  .add('Default', () => <LoginModal isOpen={true} handleClose={noOp}/>)
  .add('With error', () => <LoginModal isOpen={true} handleClose={noOp} errors={{ email: 'Invalid email', password: 'Invalid password' }}/>)
  .add('Loading', () => <LoginModal isOpen={true} isRequest={true} handleClose={noOp}/>);

storiesOf(`${prefix}Sign Up`)
  .add('Default', () => <SignUpModal isOpen={true} handleClose={noOp}/>)
  .add('With error', () => <SignUpModal isOpen={true} handleClose={noOp} errors={{ email: 'Invalid email', password: 'Invalid password' }}/>)
  .add('Loading', () => <SignUpModal isOpen={true} isRequest={true} handleClose={noOp}/>);

