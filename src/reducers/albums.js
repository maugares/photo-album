const reducer = (state = [], action = {}) => {
  switch (action.type) {
    case 'ADD_ALBUM':
      return [...state, action.payload]

    case 'SET_ALBUMS':
      return action.payload

    default:
      return state
  }
}

export default reducer