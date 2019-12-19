import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PasswordField from '../form/PasswordField';
import { authSelectors } from '../../modules/auth/authSelectors';
import { pushLogin, saveLoginField, clearAll } from '../../modules/auth/authActions';
import { REQUEST, SUCCESS } from '../../config/constants';

import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Box,
  Container,
  CircularProgress
} from '@material-ui/core';

export default function LoginModal({ isOpen, handleClose }) {
  const { status, input, errors } = useSelector(authSelectors.getLogin);
  const dispatch = useDispatch();

  const handleSend = useCallback(() => dispatch(pushLogin()), []);
  const handleSave = useCallback(
    ({ currentTarget }) =>
      dispatch(saveLoginField({ field: currentTarget.name, value: currentTarget.value })),
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
    <Dialog
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <DialogTitle>Login</DialogTitle>
      <DialogContent>
        <Container maxWidth="xs">
          {/*<DialogContentText>*/}
          {/*  To subscribe to this website, please enter your email address here. We will send updates*/}
          {/*  occasionally.*/}
          {/*</DialogContentText>*/}
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
          <Box my={3}>
            <Button
              variant="contained"
              size="large"
              color="primary"
              fullWidth
              onClick={handleSend}
              disabled={isRequest}
            >
              {isRequest ? <CircularProgress color="secondary" size={26} /> : 'Login'}
            </Button>
          </Box>
        </Container>
      </DialogContent>
    </Dialog>
  );
}
