import {
  RECEIVE_ALL_LIKES,
  RECEIVE_LIKE,
  REMOVE_LIKE,
  MAKE_LIKE
} from '../actions/likes';
import merge from 'lodash/merge';

const LikesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_ALL_LIKES:
      return merge({}, action.likes);
    case MAKE_LIKE:
      let newState = merge({}, oldState);
      newState[action.like.id] = action.like;
      return newState;
    default:
      return oldState;
  }
};

export default LikesReducer;
