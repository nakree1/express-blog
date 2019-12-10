import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Wrapper from './shared/wrappers/Wrapper';
import routing from '../config/routing';
import Feed from '../pages/Feed/Feed';
import CssBaseline from '@material-ui/core/CssBaseline';

const App = () => (
  <>
    <CssBaseline />
    <Switch>
      <Wrapper>
        <Route path={routing().root} component={Feed} />
        {/*<Route component={Feed}/>*/}
        {/*<ArticleTagsList/>*/}
        {/*<CreateUserForm/>*/}
        {/*<GetUsersForm/>*/}
        {/*<GetArticlesForm/>*/}
      </Wrapper>
    </Switch>
  </>
);

export default App;
