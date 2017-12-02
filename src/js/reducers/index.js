import { combineReducers } from 'redux';
import { auth } from './auth';
import { users } from './users';
import { loginError } from './login';
import { filterType } from './filterType';
import { sortType } from './sortType';

export default combineReducers({
  auth,
  users,
  // TODO: change this to login reducer and different types to handle errors, success, etc
  loginError,
  filterType,
  sortType
})
