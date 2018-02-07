import { combineReducers } from 'redux';
import StationsReducer from './stations';
import TracksReducer from './tracks';
import AudioReducer from './audio';

export default combineReducers({
  stations: StationsReducer,
  tracks: TracksReducer,
  audio: AudioReducer
});
