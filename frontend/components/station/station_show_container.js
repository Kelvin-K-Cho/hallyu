import { connect } from 'react-redux';
import StationShow from './station_show';
import { fetchStation, deleteStation } from '../../actions/stations';

const mapStateToProps = (state, ownProps) => ({
  station: state.entities.stations[ownProps.match.params.stationId],
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchStation: (userId, id) => dispatch(fetchStation(userId, id)),
  deleteStation: (userId, stationId) => dispatch(deleteStation(userId, stationId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StationShow);
