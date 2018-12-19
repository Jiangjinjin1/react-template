import {AnyAction} from "redux";

export function replaceReducer(actionType: string, defaultValue: any) {
  return (state = defaultValue, action: AnyAction) => {
    if (action.type === actionType) {
      return action.payload
    }
    return state
  }
}

export default {}