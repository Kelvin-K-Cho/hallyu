import { combineReducers } from 'redux';
import StationsReducer from './stations';
import TracksReducer from './tracks';
import AudioReducer from './audio';
// import LikesReducer from './likes';
// import DislikesReducer from './dislikes';

export default combineReducers({
  stations: StationsReducer,
  tracks: TracksReducer,
  audio: AudioReducer,
  // likes: LikesReducer,
  // dislikes: DislikesReducer
});
