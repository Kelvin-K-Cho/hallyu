import { connect } from 'react-redux';
import NavBar from './navbar';
import { logout } from '../../actions/session';
import { clearErrors } from '../../actions/errors';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  path: ownProps.location.pathname,
  errors: state.errors
});

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    clearErrors: () => dispatch(clearErrors())
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
