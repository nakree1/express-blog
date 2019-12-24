import React, { useState, useCallback, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { ArrowDropDown } from '@material-ui/icons';
import { Avatar, Typography, Chip, makeStyles } from '@material-ui/core';
import Menu from './menu/Menu';

const useStyles = makeStyles((theme) => {
  console.log(theme);
  return {
    root: {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.getContrastText(theme.palette.primary.light),
      transition: 'color 0.3s',
      '&:hover': {
        color: theme.palette.grey[800]
      }
    },
    avatar: {
      backgroundColor: theme.palette.secondary.light[700]
    },
    text: {
      margin: theme.spacing(2)
    }
  };
});

export default function Profile({ profile, handleLogout }) {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { email, username, avatar } = profile;

  return (
    <>
      <Chip
        innerRef={anchorEl}
        className={classes.root}
        onClick={handleClick}
        onDelete={handleClick}
        deleteIcon={<ArrowDropDown />}
        label={
          <Typography variant="subtitle1" className={classes.text}>
            {username || email}
          </Typography>
        }
        avatar={<Avatar src={avatar} alt={username} variant="circle" className={classes.avatar} />}
      />
      <Menu
        isOpen={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        handleLogout={handleLogout}
      />
    </>
  );
}
