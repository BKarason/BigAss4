
import { combineReducers } from 'redux';
import user from './userReducer';
import room from './roomReducer';


export default combineReducers({
  room, 
  user
});