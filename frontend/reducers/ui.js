import { SET_STATION } from '../actions/ui';
import { RECEIVE_DISLIKE, REMOVE_DISLIKE, MAKE_DISLIKE } from '../actions/dislikes';
import { RECEIVE_LIKE, REMOVE_LIKE, MAKE_LIKE } from '../actions/likes';
import merge from 'lodash/merge';

let initialState = {
  stationId: null,
  stationName: null,
  likes: [],
  dislikes: [],
  track_likes: [],
  track_dislikes: [],
  // likeCheck: undefined,
  // dislikeCheck: undefined
};

const uiReducer = (oldState = initialState, action) => {
  let newState;
  Object.freeze(oldState);
  switch(action.type) {
    case SET_STATION:
      newState = merge({}, oldState);
      newState['stationId'] = action.station.id;
      newState['stationName'] = action.station.station_name;
      newState['likes'] = action.station.likes;
      newState['dislikes'] = action.station.dislikes;
      newState['track_likes'] = action.station.track_likes;
      newState['track_dislikes'] = action.station.track_dislikes;
      return newState;
    // case RECEIVE_LIKE:
    //   newState = merge({}, oldState);
    //   newState['likeCheck'] = action.like;
    //   return newState;
    // case RECEIVE_DISLIKE:
    //   newState = merge({}, oldState);
    //   newState['dislikeCheck'] = action.dislike;
    //   return newState;
    case MAKE_LIKE:
      newState = merge({}, oldState);
      newState['likes'].push(action.like.id);
      newState['track_likes'].push(action.like.track_id);
      return newState;
    case MAKE_DISLIKE:
      newState = merge({}, oldState);
      newState['dislikes'].push(action.dislike.id);
      newState['track_dislikes'].push(action.dislike.track_id);
      return newState;
    case REMOVE_LIKE:
      newState = merge({}, oldState);
      newState['likes'].splice(newState['likes'].indexOf(action.like.id), 1);
      newState['track_likes'].splice(newState['track_likes'].indexOf(action.like.track_id), 1);
      return newState;
    case REMOVE_DISLIKE:
      newState = merge({}, oldState);
      newState['dislikes'].splice(newState['dislikes'].indexOf(action.id), 1);
      newState['track_dislikes'].splice(newState['track_dislikes'].indexOf(action.track_id), 1);
      return newState;
    default:
      return oldState;
  }
};

export default uiReducer;
