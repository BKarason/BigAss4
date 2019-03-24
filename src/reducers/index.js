
import { combineReducers } from 'redux';
import user from './userReducer';
import room from './roomReducer';
import ops from './opReducer';


export default combineReducers({
  room, 
  user,
  ops
});