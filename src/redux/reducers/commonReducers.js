const INITIAL_STATE = {
  count_: {},
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'count':
      return Object.assign({}, state, { count_: action.payload });
    default:
      return state;
  }
}
