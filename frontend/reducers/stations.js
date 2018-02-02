import {
  RECEIVE_ALL_STATIONS,
  RECEIVE_STATION,
  REMOVE_STATION
} from '../actions/stations';
import merge from 'lodash/merge';

const StationsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_ALL_STATIONS:
      return merge({}, action.stations);
    case RECEIVE_STATION:
      return merge({}, oldState, {
        [action.station.id]: action.station
      });
    case REMOVE_STATION:
      let newState = merge({}, oldState);
      delete newState[action.stationId];
      return newState;
    default:
      return oldState;
  }
};

export default StationsReducer;
