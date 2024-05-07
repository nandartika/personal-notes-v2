import { ActionType } from "./action";

function userReducer(user = null, action) {
  switch (action.type) {
    case ActionType.RECEIVE_USER_LOGGED:
      return action.payload.user;
    default:
      return user;
  }
}

export default userReducer;
