import { Button, Container, Typography } from '@material-ui/core';
import PasswordField from '../../../components/form/PasswordField';
import React from 'react';

export default function ChangePassword({ classes }) {
  return (
    <>
      <Typography variant="subtitle2" color="textSecondary">
        Form for changing current account password
      </Typography>
      <Container maxWidth="xs" component="form" justify="center" alignItems="center">
        <PasswordField label="Current password" fullWidth />
        <PasswordField label="New password" fullWidth />
        <PasswordField label="Confirm password" fullWidth />
        <Button variant="contained" color="primary" className={classes.button} fullWidth>
          Submit
        </Button>
      </Container>
    </>
  );
}
