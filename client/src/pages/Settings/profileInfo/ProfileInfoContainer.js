import React, { useCallback, useEffect, useState } from 'react';

import ProfileInfo from './ProfileInfo';
import { useDispatch, useSelector } from 'react-redux';
import { settingsSelectors } from '../../../modules/settings/settingsSelectors';
import { pushProfileUpdate, saveProfileField } from '../../../modules/settings/settingsActions';
import { authSelectors } from '../../../modules/auth/authSelectors';

import { REQUEST } from '../../../config/constants';

export default function ProfileInfoContainer({ classes }) {
  const dispatch = useDispatch();

  const { status, input, errors } = useSelector(settingsSelectors.getProfile) || {};
  const profile = useSelector(authSelectors.getProfile) || {};

  const isRequest = status === REQUEST;

  const actualInput = {};

  Object.keys(input).forEach((key) => {
    if (input[key] === null) {
      actualInput[key] = profile[key];
    } else {
      actualInput[key] = input[key];
    }
  });

  const [avatar, changeAvatar] = useState(null);

  const handleChange = useCallback(({ currentTarget }) => {
    if (currentTarget.id === 'avatar' && currentTarget.name === 'avatar') {
      const file = currentTarget.files[0];

      const reader = new FileReader();

      reader.onload = ({ target: { result } }) => {
        changeAvatar(file);
        dispatch(saveProfileField({ field: currentTarget.name, value: result }));
        currentTarget.value = null;
      };

      reader.readAsDataURL(file);
    } else {
      dispatch(saveProfileField({ field: currentTarget.name, value: currentTarget.value }));
    }
  }, []);

  const handleSend = useCallback(() => {
    dispatch(pushProfileUpdate(avatar));
  }, [avatar]);

  const handleReset = useCallback(() => {
    changeAvatar(null);
    dispatch(pushProfileUpdate.fulfill());
  });

  return (
    <ProfileInfo
      classes={classes}
      isRequest={isRequest}
      input={actualInput}
      errors={errors}
      handleSend={handleSend}
      handleChange={handleChange}
      handleReset={handleReset}
    />
  );
}
