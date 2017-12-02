export function sortType(state = '', action) {
  switch (action.type) {
    case 'SET_SORT':
      return action.sortType;
    default:
      return state;
  }
}
