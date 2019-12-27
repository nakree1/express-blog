import React from 'react';
import { Route } from 'react-router-dom';

import AuthGuard from '../../HOC/AuthGuard';

function AuthRoute(props) {
  return <Route {...props} />;
}

export default AuthGuard(AuthRoute);
