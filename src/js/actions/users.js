// GET USERS 
function fetchUsers() {
  return dispatch => {
    return fetch('/data')
      .then(response => response.json())
      .then(users => dispatch(usersSuccess(users.users)))
  }
}

export function usersSuccess(users) {
  return {
    type: 'USERS_SUCCESS',
    users
  };
}

export function loadUsers() {
  return (dispatch, getState) => {
    return dispatch(fetchUsers());
  }
}
