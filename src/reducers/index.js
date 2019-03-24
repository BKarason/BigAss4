
import { combineReducers } from 'redux';
import user from './userReducer';
import room from './roomReducer';
import ops from './opReducer';
import users from './usersReducer';


export default combineReducers({
  room, 
  user,
  ops,
  users
});