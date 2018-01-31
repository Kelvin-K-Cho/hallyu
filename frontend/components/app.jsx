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

export default () => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h1>Hallyu</h1>
      </Link>
    </header>
    <Route path='/' component={SignupContainer}/>
  </div>
);
