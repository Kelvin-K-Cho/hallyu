import React from 'react';
import { Link } from 'react-router-dom';

export default ( { currentUser, logout} ) => {
  const display = currentUser ? (
    <div>
      <p>Hello, {currentUser.name}</p>
      <button onClick={logout}>Log Out</button>
    </div>
  ) : (
    <div>
      <Link className='btn' to="/signup">Sign Up</Link>
      <Link className='btn' to="/login">Log In</Link>
    </div>
  );
  return (
    <header className="nav-bar">
      <h1 className="logo">Hallyu</h1>
      <div>
        {display}
      </div>
    </header>
  );
};
