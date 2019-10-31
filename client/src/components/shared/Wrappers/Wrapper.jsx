import React, { Fragment } from 'react';
import Header from './Header';

const Wrapper = ({ children }) => (
  <Fragment>
    <Header />
    <main className="container">{children}</main>
  </Fragment>
);

export default Wrapper;
