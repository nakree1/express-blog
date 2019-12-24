import React, { Fragment } from 'react';
import Header from './header/Header';
import { Container, makeStyles } from '@material-ui/core';

const Wrapper = ({ children }) => {
  const classes = makeStyles((theme) => ({
    root: {
      marginTop: theme.spacing(4)
    }
  }))();

  return (
    <Fragment>
      <Header />
      <Container maxWidth="md" component="main" className={classes.root}>
        {children}
      </Container>
    </Fragment>
  );
};

export default Wrapper;
