import { RECEIVE_ALL_TRACKS, RECEIVE_TRACK } from '../actions/tracks';
import merge from 'lodash/merge';

const TracksReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_TRACKS:
      return merge({}, action.tracks);
    case RECEIVE_TRACK:
      return merge({}, oldState, {
        [action.track.id]: action.track
      });
    default:
      return oldState;
  }
};

export default TracksReducer;
