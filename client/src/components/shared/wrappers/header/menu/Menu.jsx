import React from 'react';

import {
  Popover,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  makeStyles
} from '@material-ui/core';
import { AccountCircle, Settings, ExitToApp } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import routing from '../../../../../config/routing';

const useStyles = makeStyles(() => ({
  icon: {
    minWidth: '40px'
  }
}));

function ListItemLink({ children, to }) {
  return (
    <ListItem button component={Link} to={to}>
      {children}
    </ListItem>
  );
}

export default function Menu({ isOpen, onClose, handleLogout, anchorEl }) {
  const classes = useStyles();

  return (
    <Popover
      open={isOpen}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center'
      }}
      transformOrigin={{
        vertical: -5,
        horizontal: 'center'
      }}
      onClose={onClose}
      disableRestoreFocus
    >
      <List component="nav" className={classes.root}>
        <ListItemLink to={'/account'}>
          <ListItemIcon className={classes.icon}>
            <AccountCircle />
          </ListItemIcon>
          <ListItemText>Profile</ListItemText>
        </ListItemLink>
        <ListItemLink to={routing().settings}>
          <ListItemIcon className={classes.icon}>
            <Settings />
          </ListItemIcon>
          <ListItemText>Settings</ListItemText>
        </ListItemLink>
        <Divider />
        <ListItem button onClick={handleLogout}>
          <ListItemIcon className={classes.icon}>
            <ExitToApp />
          </ListItemIcon>
          <ListItemText>Logout</ListItemText>
        </ListItem>
      </List>
    </Popover>
  );
}
