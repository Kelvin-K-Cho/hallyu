import { connect } from 'react-redux';
import StationIndex from './station_index';
import {
  fetchStations,
  deleteStation,
} from '../../actions/stations';
import {
  fetchTracks
} from '../../actions/tracks';
import { selectStations } from '../../reducers/selectors';

const mapStateToProps = state => ({
  stations: selectStations(state),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchStations: (userId) => dispatch(fetchStations(userId)),
  deleteStation: (userId, stationId) => dispatch(deleteStation(userId, stationId)),
  fetchTracks: () => dispatch(fetchTracks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StationIndex);
