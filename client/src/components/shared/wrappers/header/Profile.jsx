import React from 'react';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

export default function Profile({ profile, handleLogout }) {
  const { email } = profile;

  return (
    <>
      <Typography>{email}</Typography>
      <Button color="inherit" onClick={handleLogout}>
        Logout
      </Button>
    </>
  );
}
