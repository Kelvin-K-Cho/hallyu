import { SET_STATION } from '../actions/ui';
import merge from 'lodash/merge';

let initialState = {
  stationId: null,
  stationName: null
};

const uiReducer = (oldState = initialState, action) => {
  let newState;
  Object.freeze(oldState);
  switch(action.type) {
    case SET_STATION:
    newState = merge({}, oldState);
    newState['stationId'] = action.station.id;
    newState['stationName'] = action.station.station_name;
    return newState;
    default:
      return oldState;
  }
};

export default uiReducer;
