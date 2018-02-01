import React from 'react';
import { Link } from 'react-router-dom';
import ErrorList from '../error/error_list';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.location.pathname !== newProps.location.pathname) {
      if (this.props.errors && this.props.errors.length){
        this.props.clearErrors();
      }
    }
  }

  render (){
    let display;
    if (this.props.currentUser) {
      display = (
        <div>
          <h1>Hello, {this.props.currentUser.email}</h1>
          <button onClick={this.props.logout}>Logout</button>
        </div>
      );
    } else {
      let link;
      if (this.props.path === '/signup') {
        link = <Link id="button-login" to={"/login"}>Log In</Link>;
      } else if (this.props.path === '/login') {
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
        <ErrorList errors={ this.props.errors } />
        <div>
          {display}
        </div>
      </header>
    );
  }
}

export default NavBar;
