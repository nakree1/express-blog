import React from 'react';
import { Button, TextField, Grid, Avatar, CircularProgress } from '@material-ui/core';

import { FILE_MIME } from '../../../config/constants';

export default function ProfileInfo({
  classes,
  isRequest,
  input,
  errors,
  handleChange,
  handleSend,
  handleReset
}) {
  return (
    <>
      <Grid container direction="column">
        <Grid
          container
          direction="row"
          justify="center"
          alignContent="center"
          alignItems="center"
          spacing={2}
        >
          <Grid item alignContent="center" alignItems="center">
            <label htmlFor="avatar">
              <Avatar src={input.avatar} alt={input.username} className={classes.avatar} />
            </label>
            <input
              type="file"
              id="avatar"
              className={classes.avatarInput}
              name="avatar"
              onChange={handleChange}
              accept={FILE_MIME.IMAGES.join(',')}
              disabled={isRequest}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="First name"
              name="firstName"
              value={input.firstName}
              error={Boolean(errors.firstName)}
              helperText={errors.firstName}
              onChange={handleChange}
              margin="dense"
              size="small"
              fullWidth
              disabled={isRequest}
            />
            <TextField
              label="Last name"
              name="lastName"
              value={input.lastName}
              error={Boolean(errors.lastName)}
              helperText={errors.lastName}
              onChange={handleChange}
              margin="dense"
              size="small"
              fullWidth
              disabled={isRequest}
            />
            <TextField
              label="Username"
              name="username"
              value={input.username}
              error={Boolean(errors.username)}
              helperText={errors.username}
              onChange={handleChange}
              margin="dense"
              size="small"
              fullWidth
              disabled={isRequest}
            />
          </Grid>
        </Grid>
        <Grid
          container
          xs={6}
          direction="row"
          justify="flex-end"
          alignContent="center"
          alignItems="center"
          spacing={2}
          className={classes.button}
        >
          <Grid item>
            <Button variant="contained" color="primary" onClick={handleSend} disabled={isRequest}>
              {isRequest ? <CircularProgress color="secondary" size={26} /> : 'Save'}
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleReset}
              disabled={isRequest}
            >
              Reset
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
