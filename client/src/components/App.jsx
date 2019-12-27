import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import CssBaseline from '@material-ui/core/CssBaseline';

import Wrapper from './shared/wrappers/Wrapper';
import routing from '../config/routing';
import Feed from '../pages/Feed/Feed';
import Settings from '../pages/Settings/Settings';
import AuthRoute from './shared/routes/AuthRoute';

const App = () => (
  <>
    <ToastContainer
      className="custom-toast-container"
      toastClassName="custom-toast"
      bodyClassName="custom-toast__body"
      hideProgressBar
      position={toast.POSITION.TOP_RIGHT}
      autoClose={4000}
    />
    <CssBaseline />
    <Switch>
      <Wrapper>
        <AuthRoute exact path={routing().settings} component={Settings} />
        <Route exact path={routing().root} component={Feed} />
      </Wrapper>
    </Switch>
  </>
);

export default App;
