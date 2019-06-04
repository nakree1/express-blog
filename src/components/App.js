import React from 'react';
import Wrapper from './Wrappers/Wrapper';
import CreateUserForm from './Forms/CreateUserForm';
import GetUsersForm from './Forms/GetUsersForm';
import GetArticlesForm from './Forms/GetArticlesForm';

const App = () => (
  <Wrapper>
    <CreateUserForm/>
    <GetUsersForm/>
    <GetArticlesForm/>
  </Wrapper>
)

export default App;
