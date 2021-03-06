import React from 'react';
import { Link } from 'react-router-dom';

class Signup extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  handleInput(type){
    return (e) => {
      this.setState({
        [type]: e.target.value
      });
    };
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createNewUser(this.state).then( () => this.props.history.push(`/stations`) );
  }

  handleDemo(e) {
    e.preventDefault();
    const demo = {email: 'pandora', password: 'secret'};
    this.props.login(demo).then(() => this.props.history.push('/stations'));
  }

  render(){
    return (
      <div className="div-session">
        <h1>Find the songs you love and let</h1>
        <h1>the bias you love find you.</h1>
        <h2>Sign up for free</h2>
        <form className="form-session">
          <label id="email-session">
            <input
              type="text"
              value={this.state.email}
              onChange={this.handleInput('email')}
              placeholder="Email"
              />
          </label>
          <label id="password-session">
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleInput('password')}
              placeholder="Password"
              />
          </label>
          <button onClick={this.handleSubmit}>Sign Up</button>
          <button id="button-demo" onClick={this.handleDemo}>Demo User</button>
        </form>
        <div id="check-account">Already have a Hallyu account?
          &nbsp;<Link id="link-session" to='/login'>Log In</Link>
        </div>
      </div>
    );
  }

}

export default Signup;
