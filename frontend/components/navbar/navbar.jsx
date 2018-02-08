import React from 'react';
import { Link } from 'react-router-dom';
import ErrorList from '../error/error_list';

class NavBar extends React.Component {

  componentWillReceiveProps(newProps) {
    if (this.props.location.pathname !== newProps.location.pathname) {
      if (this.props.errors && this.props.errors.length){
        this.props.clearErrors();
      }
    }
  }

  render () {
    let display;
    let logo = (
      <Link to="/">
        <h1 id="logo">Hallyu</h1>
      </Link>
    );
    if (this.props.currentUser) {
      display = (
        <div id='container-nav'>
          <Link id='link-logo' to="/">
            <h1 id="logo-fixed">Hallyu</h1>
          </Link>
          <Link to={"/"}>
            <button id="button-logout" onClick={this.props.logout}>Logout</button>
          </Link>
          <img id="image-user" src={this.props.currentUser.image_url}/>
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

    if (!this.props.currentUser) {
      return (
        <header className="nav-bar">
          {logo}
          <ErrorList errors={ this.props.errors } />
          <div>
            {display}
          </div>
        </header>
      );
    } else {
      return (
        <header className="nav-bar">
          <Link id="link-stations" to={"/stations"}>
            My Stations
          </Link>
          &nbsp;
          &nbsp;
          <div id="now-playing">
            Now Playing
          </div>
          <ErrorList errors={ this.props.errors } />
          <div>
            {display}
          </div>
        </header>
      );
    }
  }
}

export default NavBar;
