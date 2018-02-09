import { connect } from 'react-redux';
import { fetchTrack, fetchTracks } from '../../actions/tracks';
import { togglePlay, toggleRepeat, toggleMute, nextTrack } from '../../actions/audio';
import { createDislike, deleteDislike } from '../../actions/dislikes';
import { createLike, deleteLike } from '../../actions/likes';
import MediaBar from "./mediabar";

const mapStateToProps = (state) => {
  return {
    audio: state.entities.audio,
    ui: state.ui
};};

const mapDispatchToProps = (dispatch) => ({

  createLike: (like) => dispatch(createLike(like)),
  deleteLike: (id) => dispatch(deleteLike(id)),
  createDislike: (dislike) => dispatch(createDislike(dislike)),
  deleteDislike: (id) => dispatch(deleteDislike(id)),

  togglePlay: () => dispatch(togglePlay()),
  toggleMute: () => dispatch(toggleMute()),
  toggleRepeat: () => dispatch(toggleRepeat()),
  nextTrack: () => dispatch(nextTrack())

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MediaBar);
