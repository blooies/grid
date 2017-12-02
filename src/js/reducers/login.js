export function loginError(state = false, action) {
  switch (action.type) {
    case 'LOGIN_ERROR':
      return action.isError;
    default:
      return state;
  }
}
