import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import routing from '../../../config/routing';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import LoginModal from '../../modal/LoginModal';
import SignUpModal from '../../modal/SignUpModal';

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
        <Button color="inherit" onClick={() => handleLoginModal(true)}>
          Login
        </Button>
        <Button color="inherit" onClick={() => handleSignUpModal(true)}>
          Sign Up
        </Button>
      </Toolbar>

      <SignUpModal isOpen={isSignUpOpen} handleClose={() => handleSignUpModal(false)} />
      <LoginModal isOpen={isLoginOpen} handleClose={() => handleLoginModal(false)} />
    </AppBar>
  );
}
