import { connect } from 'react-redux';
import StationIndex from './station_index';
import { fetchStations } from '../../actions/stations';
import { selectStations } from '../../reducers/selectors';

const mapStateToProps = state => ({
  stations: selectStations(state),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchStations: (userId) => dispatch(fetchStations(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StationIndex);
