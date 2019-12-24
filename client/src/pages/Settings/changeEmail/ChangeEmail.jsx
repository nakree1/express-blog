import React from 'react';
import { Button, Container, TextField, Typography } from '@material-ui/core';
import PasswordField from '../../../components/form/PasswordField';

export default function ChangeEmail({ classes }) {
  return (
    <>
      <Typography variant="subtitle2" color="textSecondary">
        Form for changing current account email
      </Typography>
      <Container maxWidth="xs" component="form" justify="center" alignItems="center">
        <PasswordField label="Current password" fullWidth />
        <TextField variant="outlined" margin="normal" label="Email" fullWidth />
        <Button variant="contained" color="primary" className={classes.button} fullWidth>
          Submit
        </Button>
      </Container>
    </>
  );
}
