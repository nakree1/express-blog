import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PasswordField from '../form/PasswordField';
import { authSelectors } from '../../modules/auth/authSelectors';
import { pushSignUp, saveSignUpField, clearAll } from '../../modules/auth/authActions';
import { REQUEST, SUCCESS } from '../../config/constants';

import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Box,
  Container,
  CircularProgress
} from '@material-ui/core';

export function Template({
  handleSave,
  handleSend,
  handleClose,
  isOpen,
  isRequest,
  input = {},
  errors = {}
}) {
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
            type="text"
            name="username"
            onChange={handleSave}
            disabled={isRequest}
            value={input.username}
            error={Boolean(errors.username)}
            helperText={errors.username}
            variant="outlined"
            margin="normal"
            autoFocus
            label="Nickname"
            fullWidth
          />
          <TextField
            type="email"
            name="email"
            onChange={handleSave}
            disabled={isRequest}
            value={input.email}
            error={Boolean(errors.email)}
            helperText={errors.email}
            variant="outlined"
            margin="normal"
            label="Email Address"
            fullWidth
          />
          <PasswordField
            name="password"
            onChange={handleSave}
            disabled={isRequest}
            value={input.password}
            error={Boolean(errors.password)}
            helperText={errors.password}
            variant="outlined"
            margin="normal"
            fullWidth
          />
          <TextField
            type="password"
            name="confirmPassword"
            value={input.confirmPassword}
            error={Boolean(errors.confirmPassword)}
            helperText={errors.confirmPassword}
            onChange={handleSave}
            disabled={isRequest}
            variant="outlined"
            margin="normal"
            label="Confirm password"
            fullWidth
          />

          <Box my={3}>
            <Button
              variant="contained"
              size="large"
              color="primary"
              fullWidth
              onClick={handleSend}
              disabled={isRequest}
            >
              {isRequest ? <CircularProgress color="secondary" size={26} /> : 'Sign Up'}
            </Button>
          </Box>
        </Container>
      </DialogContent>
    </Dialog>
  );
}

export default function SignUpModal({ isOpen, handleClose }) {
  const { status, input, errors } = useSelector(authSelectors.getSingUp);
  const dispatch = useDispatch();

  const handleSend = useCallback(() => dispatch(pushSignUp()), []);
  const handleSave = useCallback(
    ({ currentTarget }) =>
      dispatch(saveSignUpField({ field: currentTarget.name, value: currentTarget.value })),
    [dispatch]
  );

  useEffect(() => {
    if (status === SUCCESS) {
      handleClose();
    }

    return () => () => dispatch(clearAll());
  }, [status, dispatch]);

  const isRequest = status === REQUEST;

  return (
    <Template
      isRequest={isRequest}
      input={input}
      errors={errors}
      isOpen={isOpen}
      handleClose={handleClose}
      handleSave={handleSave}
      handleSend={handleSend}
    />
  );
}
