import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Fab,
  Box,
  Container
} from '@material-ui/core';
import PasswordField from '../form/PasswordField';

export default function SignUpModal({ isOpen, handleClose }) {
  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <DialogTitle>New Account</DialogTitle>
      <DialogContent>
        <Container maxWidth="xs">
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
          <TextField
            variant="outlined"
            margin="normal"
            autoFocus
            label="Nickname"
            type="email"
            fullWidth
          />
          <TextField
            variant="outlined"
            margin="normal"
            label="Email Address"
            type="email"
            fullWidth
          />
          <PasswordField variant="outlined" margin="normal" fullWidth />

          <Box my={3}>
            <Button variant="contained" size="large" color="primary" fullWidth>
              Sign Up
            </Button>
          </Box>
        </Container>
      </DialogContent>
    </Dialog>
  );
}
