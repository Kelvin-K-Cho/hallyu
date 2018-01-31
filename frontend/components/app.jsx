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
import NavBarContainer from './nav_bar/nav_bar_container';

export default () => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h1>Hallyu</h1>
      </Link>
    </header>
    <Route path='/signup' component={SignupContainer}/>
    <Route path='/' component={NavBarContainer}/>
  </div>
);
