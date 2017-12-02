export function usersSuccess(users) {
  return {
    type: 'USERS_SUCCESS',
    users
  }
}

export function loadUsers() {
  return (dispatch, getState) => {
    return fetch('/data')
      .then(response => response.json())
      .then(users => dispatch(usersSuccess(users.users)))
  }
}
