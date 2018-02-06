import { combineReducers } from 'redux';
import StationsReducer from './stations';
import TracksReducer from './tracks';

export default combineReducers({
  stations: StationsReducer,
  tracks: TracksReducer
});
