import { combineReducers } from 'redux';
import StationsReducer from './stations';

export default combineReducers({
  stations: StationsReducer
});
