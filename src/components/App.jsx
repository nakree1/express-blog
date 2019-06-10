import React from 'react';
import Wrapper from './Wrappers/Wrapper';
import CreateUserForm from './Forms/CreateUserForm';
import GetUsersForm from './Forms/GetUsersForm';
import GetArticlesForm from './Forms/GetArticlesForm';
import ArticleTagsList from './_common/ArticleTags/ArticleTagsList';

const App = () => (
  <Wrapper>
    <ArticleTagsList/>
    <CreateUserForm/>
    <GetUsersForm/>
    <GetArticlesForm/>
  </Wrapper>
)

export default App;
