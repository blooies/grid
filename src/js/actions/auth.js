export function authSuccess(sessionToken) {
  return {
    type: 'AUTH_SUCCESS',
    sessionToken
  }
}

// TODO: add loading/success/error stages;
export function checkAuth() {
  return dispatch => {
    let sessionToken = null;
    try {
      sessionToken = localStorage.getItem('user:sessionToken');
    } catch (e) {
      localStorage.removeItem('user:sessionToken');
      throw (e);
    }

    if (sessionToken) {
      dispatch(authSuccess(sessionToken));
    } else {
      dispatch(authSuccess(false));
    }

    return sessionToken;
  }
}
