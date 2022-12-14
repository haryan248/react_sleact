import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import loadable from '@loadable/component';

const LogIn = loadable(() => import('@pages/LogIn'));
const SignUp = loadable(() => import('@pages/SignUp'));
const Workspace = loadable(() => import('@layouts/Workspace'));

const App = () => {
  return (
    <Switch>
      <Redirect exact path="/" to="/login" />
      <Route path="/login" component={LogIn}></Route>
      <Route path="/signup" component={SignUp}></Route>
      <Route path="/workspace/:workspace" component={Workspace}></Route>
    </Switch>
  );
};
export default App;

// pages - 각 페이지들
// components - 공통된 컴포넌트
// layout -
