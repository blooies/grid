export function auth(state = false, action) {
  switch (action.type) {
    case 'AUTH_SUCCESS':
      return action.sessionToken;
    default:
      return state;
  }
}
