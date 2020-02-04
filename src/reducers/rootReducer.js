import { combineReducers } from 'redux';

/* Reducers */
import appReducer from './appReducer';
import mockReducer from './mockReducer';

export default combineReducers({
  app: appReducer,
  mock: mockReducer,
});
