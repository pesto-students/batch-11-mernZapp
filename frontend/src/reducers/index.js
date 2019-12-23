import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import createzapp from './creatzapp';


export default combineReducers({
  alert,
  auth,
  createzapp,
});
