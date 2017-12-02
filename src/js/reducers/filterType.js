export function filterType(state = '', action) {
  switch (action.type) {
    case 'SET_CATEGORY_FILTER':
      return action.filterType;
    default:
      return state;
  }
}
