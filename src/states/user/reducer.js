import { ActionType } from "./action";

function userReducer(user = null, action) {
  switch (action.type) {
    case ActionType.SET_AUTH_USER:
      return { accessToken: action.payload.accessToken };
    case ActionType.UNSET_AUTH_USER:
      return null;
    case ActionType.RECEIVE_USER_LOGGED:
      const userLogged = action.payload.user;
      return { ...user, ...userLogged };
    default:
      return user;
  }
}

export default userReducer;
