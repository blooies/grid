export function users(state = [], action) {
  switch (action.type) {
    case 'USERS_SUCCESS':
      return action.users;
    default:
      return state;
  }
}
