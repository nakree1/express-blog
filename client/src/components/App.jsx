import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Wrapper from './shared/Wrappers/Wrapper';
import CreateUserForm from './shared/Forms/CreateUserForm';
import GetUsersForm from './shared/Forms/GetUsersForm';
import GetArticlesForm from './shared/Forms/GetArticlesForm';
import ArticleTagsList from './shared/ArticleTags/ArticleTagsList';
import routing from '../config/routing';
import Feed from './pages/Feed/Feed';

const App = () => (
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
);

export default App;
