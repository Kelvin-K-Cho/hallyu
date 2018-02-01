import React from 'react';
import { Link } from 'react-router-dom';
import ErrorList from '../error/error_list';

export default ( { currentUser, logout, path, errors} ) => {
  let display;
  if (currentUser) {
    display = (
      <div>
        <h1>Hello, {currentUser.email}</h1>
        <button onClick={logout}>Logout</button>
      </div>
    );
  } else {
    let link;
    if (path === '/signup') {
      link = <Link id="button-login" to={"/login"}>Log In</Link>;
    } else if (path === '/login') {
      link = <Link id="button-signup" to={"/signup"}>Sign Up</Link>;
    } else {
      link =
      <div>
        <Link id='button-signup' to="/signup">Sign Up</Link>
        <Link id='button-login' to="/login">Log In</Link>
      </div>;
    }
    display = (
      <div>
        {link}
      </div>
    );
  }
  return (
    <header className="nav-bar">
      <Link to="/">
        <h1 id="logo">Hallyu</h1>
      </Link>
      <ErrorList errors={ errors } />
      <div>
        {display}
      </div>
    </header>
  );
};
