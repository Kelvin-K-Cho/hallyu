import {
  RECEIVE_ALL_DISLIKES,
  RECEIVE_DISLIKE,
  REMOVE_DISLIKE,
  MAKE_DISLIKE
} from '../actions/dislikes';
import merge from 'lodash/merge';

const DislikesReducer = (oldState = {}, action) => {
  let newState;
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_ALL_DISLIKES:
      return merge({}, action.dislikes);
    case MAKE_DISLIKE:
      newState = merge({}, oldState);
      newState[action.dislike.id] = action.dislike;
      return newState;
      case REMOVE_DISLIKE:
      newState = merge({}, oldState);
      delete newState[action.dislike.id];
      return newState;
    default:
      return oldState;
  }
};

export default DislikesReducer;
