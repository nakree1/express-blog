import React from 'react';

import { Button, Container, Typography } from '@material-ui/core';

export default function DeleteAccount({ classes }) {
  return (
    <>
      <Typography variant="subtitle2" color="textSecondary">
        Permanently delete account. This action can't be undone
      </Typography>
      <Container maxWidth="xs" component="form" justify="center" alignItems="center">
        <Button variant="contained" color="secondary" className={classes.button} fullWidth>
          Delete
        </Button>
      </Container>
    </>
  );
}
