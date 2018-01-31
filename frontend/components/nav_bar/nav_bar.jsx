import React from 'react';
import { Link } from 'react-router-dom';

export default ( { currentUser, logout, path} ) => {
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
      link = <Link className="button-login" to={"/login"}>Log In</Link>;
    } else if (path === '/login') {
      link = <Link className="button-signup" to={"/signup"}>Sign Up</Link>;
    } else {
      link =
      <div>
        <Link className='btn' to="/signup">Sign Up</Link>
        <Link className='btn' to="/login">Log In</Link>
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
      <h1 className="logo">Hallyu</h1>
      <div>
        {display}
      </div>
    </header>
  );
};
