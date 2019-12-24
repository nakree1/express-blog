import React from 'react';
import { Button, TextField, Grid, Avatar } from '@material-ui/core';

export default function ProfileInfo({ classes }) {
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
            <Avatar src={''} alt="test" className={classes.avatar} />
          </Grid>
          <Grid item xs={4}>
            <TextField label="First name" margin="dense" size="small" fullWidth />
            <TextField label="Last name" margin="dense" size="small" fullWidth />
            <TextField label="Username" margin="dense" size="small" fullWidth />
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
            <Button variant="contained" color="primary">
              Save
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="secondary">
              Reset
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
