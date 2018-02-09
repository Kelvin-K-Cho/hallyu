import { connect } from 'react-redux';
import { togglePlay, toggleRepeat, toggleMute, nextTrack } from '../../actions/audio';
import { fetchDislikes, fetchDislike, createDislike, deleteDislike } from '../../actions/dislikes';
import { fetchLikes, fetchLike, createLike, deleteLike } from '../../actions/likes';
import MediaBar from "./mediabar";

const mapStateToProps = (state) => {
  return {
    audio: state.entities.audio,
    likes: state.entities.likes,
    dislikes: state.entities.dislikes,
    ui: state.ui
};};

const mapDispatchToProps = (dispatch) => ({

  fetchLikes: () => dispatch(fetchLikes()),
  fetchDislikes: () => dispatch(fetchDislikes()),
  fetchLike: (id) => dispatch(fetchLike(id)),
  fetchDislike: (id) => dispatch(fetchDislike(id)),
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
