import React from 'react';
import { connect } from 'react-redux';
import NavBar from './navbar';
import { logout } from '../../actions/session';
import { clearErrors } from '../../actions/errors';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  path: ownProps.location.pathname,
  errors: state.errors
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  return {
    logout: () => dispatch(logout()),
    clearErrors: () => dispatch(clearErrors()),
    formType
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
