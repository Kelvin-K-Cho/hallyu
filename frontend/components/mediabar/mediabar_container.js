import { connect } from 'react-redux';
import { togglePlay, toggleRepeat, toggleMute, nextTrack } from '../../actions/audio';
import { fetchDislike, createDislike, deleteDislike } from '../../actions/dislikes';
import { fetchLike, createLike, deleteLike } from '../../actions/likes';
import MediaBar from "./mediabar";

const mapStateToProps = (state) => {
  return {
    audio: state.entities.audio,
    ui: state.ui
};};

const mapDispatchToProps = (dispatch) => ({

  fetchLike: (id) => dispatch(fetchLike(id)),
  fetchDislike: (id) => dispatch(fetchDislike(id)),
  createLike: (like) => dispatch(createLike(like)),
  deleteLike: (like) => dispatch(deleteLike(like)),
  createDislike: (dislike) => dispatch(createDislike(dislike)),
  deleteDislike: (dislike) => dispatch(deleteDislike(dislike)),

  togglePlay: () => dispatch(togglePlay()),
  toggleMute: () => dispatch(toggleMute()),
  toggleRepeat: () => dispatch(toggleRepeat()),
  nextTrack: () => dispatch(nextTrack())

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MediaBar);
