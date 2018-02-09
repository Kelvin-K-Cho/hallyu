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
    default:
      return oldState;
  }
};

export default LikesReducer;
