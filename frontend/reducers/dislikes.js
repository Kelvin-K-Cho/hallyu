import {
  RECEIVE_ALL_DISLIKES,
  RECEIVE_DISLIKE,
  REMOVE_DISLIKE
} from '../actions/dislikes';
import merge from 'lodash/merge';

const DislikesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_ALL_DISLIKES:
      return merge({}, action.dislikes);
    default:
      return oldState;
  }
};

export default DislikesReducer;
