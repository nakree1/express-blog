import React from 'react';
import {
  Container,
  Button,
  Grid,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  TextField,
  Typography,
  Box,
  makeStyles
} from '@material-ui/core';
import {
  ExpandMore,
  AccountCircle,
  Email,
  Lock,
  Delete,
  Settings as SettingsIcon
} from '@material-ui/icons';
import Profile from '../../components/shared/wrappers/header/Profile';
import PasswordField from '../../components/form/PasswordField';
import ChangePasswordContainer from './changePassword/ChangePasswordContainer';
import ChangeEmailContainer from './changeEmail/ChangeEmailContainer';
import DeleteAccountContainer from './deleteAccount/DeleteAccountContainer';
import ProfileInfoContainer from './profileInfo/ProfileInfoContainer';

const useStyles = makeStyles((theme) => ({
  row: {
    display: 'flex',
    alignItems: 'center'
  },
  rowIcon: {
    color: theme.palette.text.secondary,
    marginRight: theme.spacing(4)
  },
  avatar: {
    width: theme.spacing(12),
    height: theme.spacing(12)
  },
  button: {
    margin: `${theme.spacing(4)}px auto`
  },
  rowContent: {
    width: '100%'
  }
}));

function PanelItem({ label, children, Icon }) {
  const classes = useStyles();

  return (
    <ExpansionPanel defaultExpanded={true}>
      <ExpansionPanelSummary expandIcon={<ExpandMore />}>
        <Box className={classes.row}>
          <Icon className={classes.rowIcon} />
          <Typography variant="h6">{label}</Typography>
        </Box>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Grid
          direction="column"
          alignItems="center"
          justify="center"
          className={classes.rowContent}
        >
          {children}
        </Grid>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}

export default function Settings() {
  const classes = useStyles();
  return (
    <>
      <PanelItem label="Profile Info" Icon={AccountCircle}>
        <ProfileInfoContainer classes={classes} />
      </PanelItem>
      <PanelItem label="Change Password" Icon={Lock}>
        <ChangePasswordContainer classes={classes} />
      </PanelItem>
      <PanelItem label="Change Email" Icon={Email}>
        <ChangeEmailContainer classes={classes} />
      </PanelItem>
      <PanelItem label="Delete account" Icon={Delete}>
        <DeleteAccountContainer classes={classes} />
      </PanelItem>
    </>
  );
}
