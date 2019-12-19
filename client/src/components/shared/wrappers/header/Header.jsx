import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Profile from './Profile';
import LoginModal from '../../../modal/LoginModal';
import SignUpModal from '../../../modal/SignUpModal';
import { authSelectors } from '../../../../modules/auth/authSelectors';
import { pushLogout } from '../../../../modules/auth/authActions';

import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function Header() {
  const dispatch = useDispatch();
  const isAuth = useSelector(authSelectors.isAuth);
  const profile = useSelector(authSelectors.getProfile);

  const handleLogout = useCallback(() => dispatch(pushLogout()), []);

  const [isLoginOpen, handleLoginModal] = useState(false);
  const [isSignUpOpen, handleSignUpModal] = useState(false);

  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Express
        </Typography>

        {isAuth ? (
          <Profile profile={profile} handleLogout={handleLogout} />
        ) : (
          <>
            <Button color="inherit" onClick={() => handleLoginModal(true)}>
              Login
            </Button>
            <Button color="inherit" onClick={() => handleSignUpModal(true)}>
              Sign Up
            </Button>
          </>
        )}
      </Toolbar>

      <SignUpModal isOpen={isSignUpOpen} handleClose={() => handleSignUpModal(false)} />
      <LoginModal isOpen={isLoginOpen} handleClose={() => handleLoginModal(false)} />
    </AppBar>
  );
}
