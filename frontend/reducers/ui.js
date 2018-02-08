import { SET_STATION } from '../actions/ui';
import merge from 'lodash/merge';

let initialState = {
  stationId: null,
  stationName: null,
  likes: null,
  dislikes: null
};

const uiReducer = (oldState = initialState, action) => {
  let newState;
  Object.freeze(oldState);
  switch(action.type) {
    case SET_STATION:
    newState = merge({}, oldState);
    newState['stationId'] = action.station.id;
    newState['stationName'] = action.station.station_name;
    newState['likes'] = action.station.track_likes;
    newState['dislikes'] = action.station.track_dislikes;
    return newState;
    default:
      return oldState;
  }
};

export default uiReducer;
