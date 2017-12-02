import { authSuccess } from './auth';
import generateSession from '../utils/generateSession';

// TODO: login should have different loading states and success/error stages
export function loginError(bool) {
  return {
    type: 'LOGIN_ERROR',
    isError: bool
  }
}

export function login({ email, password }) {
  return dispatch => {
    return fetch('/user')
      .then(response => response.json())
      .then(credentials => {
        if (credentials.data.username === email &&
          credentials.data.password === password) {
            const token = generateSession();
            localStorage.setItem('user:sessionToken', token);
            dispatch(authSuccess(token));
        } else {
          dispatch(loginError(true));
        }
      })
  }
}
