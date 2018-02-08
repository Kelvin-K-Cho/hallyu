import { combineReducers } from 'redux';
import sessionReducer from './session';
import errorsReducer from './errors';
import entitiesReducer from './entities';
import uiReducer from './ui';

export default combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer,
  ui: uiReducer
});
