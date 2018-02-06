import { connect } from 'react-redux';
import { fetchStation, createStation, updateStation } from '../../actions/stations';
import StationForm from './station_form';

const mapStateToProps = (state, ownProps) => {
  let station;
  let formType;
  if (!ownProps.match.params.stationId) {
    formType = 'new';
  } else {
    station = state.entities.stations[ownProps.match.params.stationId];
    formType = 'edit';
  }
  return {
    currentUser: state.session.currentUser,
    station,
    formType
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let action;
  if (!ownProps.match.params.stationId) {
    action = createStation;
  } else {
    action = updateStation;
  }
  return {
    fetchStation: (userId, id) => dispatch(fetchStation(userId, id)),
    action: (userId, station) => dispatch(action(userId, station))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StationForm);
