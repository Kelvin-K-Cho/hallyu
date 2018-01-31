import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';

export default () => (
  <div>
    <header>
      <Route path='/' component={NavBarContainer}/>
    </header>
    <AuthRoute path='/signup' component={SignupContainer}/>
    <AuthRoute path='/login' component={LoginContainer} />
  </div>
);
