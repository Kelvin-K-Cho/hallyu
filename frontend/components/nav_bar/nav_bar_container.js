import React from 'react';
import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { logout } from '../../actions/session';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  path: ownProps.location.pathname
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
