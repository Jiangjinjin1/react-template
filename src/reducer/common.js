export function replaceReducer(actionType, defaultValue) {
  return (state = defaultValue, action) => {
    if (action.type === actionType) {
      return action.payload
    }
    return state
  }
}

export default {}