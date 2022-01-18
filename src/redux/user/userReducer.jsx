import { UserActionTypes } from "./userTypes";

const INITIAL_STATE = {
  currentUser: null
}

const userReducer = (state = INITIAL_STATE, actions) => {
  switch(actions.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: actions.paylod,
      }

    default:
      return state;
  }
};

export default userReducer;
