import { combineReducers } from 'redux';
import { auth } from './auth';
import { users } from './users';
import { loginError } from './login';
import { filterType } from './filterType';
import { sortType } from './sortType';

export default combineReducers({
  auth,
  users,
  loginError,
  filterType,
  sortType
})
