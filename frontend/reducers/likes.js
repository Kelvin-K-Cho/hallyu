import {
  RECEIVE_ALL_LIKES,
  RECEIVE_LIKE,
  REMOVE_LIKE
} from '../actions/likes';
import merge from 'lodash/merge';

const LikesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_ALL_LIKES:
      return merge({}, action.likes);
    case RECEIVE_LIKE:
      return merge({}, oldState, {
        [action.like.id]: action.like
      });
    case REMOVE_LIKE:
      let newState = merge({}, oldState);
      delete newState[action.likeId];
      return newState;
    default:
      return oldState;
  }
};

export default LikesReducer;
