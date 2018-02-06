import { connect } from 'react-redux';
import { fetchTrack, fetchTracks } from '../../actions/tracks';
import MediaBar from "./mediabar";

const mapStateToProps = (state) => ({
  track: state.entities.tracks[1],
  tracks: state.entities.tracks,
});

const mapDispatchToProps = (dispatch) => ({
  fetchTrack: (id) => dispatch(fetchTrack(id)),
  fetchTracks: () => dispatch(fetchTracks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MediaBar);
