import { login, putAccessToken } from "../../utils/network-data";
import { asyncReceiveUserLogged } from "../user/action";

const ActionType = {
  SET_AUTH_USER: "SET_AUTH_USER",
  UNSET_AUTH_USER: "UNSET_AUTH_USER",
};

function setAuthUserActionCreator(authUser) {
  return {
    type: ActionType.SET_AUTH_USER,
    payload: {
      authUser,
    },
  };
}

function unsetAuthUserActionCreator() {
  localStorage.clear();
  return {
    type: ActionType.UNSET_AUTH_USER,
    payload: {
      authUser: null,
    },
  };
}

function asyncSetAuthUser({ email, password }) {
  return async (dispatch) => {
    try {
      const { data } = await login({ email, password });
      putAccessToken(data.accessToken);
      dispatch(setAuthUserActionCreator(data.accessToken));
      dispatch(asyncReceiveUserLogged());
    } catch (error) {
      console.log(error);
    }
  };
}

export {
  ActionType,
  setAuthUserActionCreator,
  unsetAuthUserActionCreator,
  asyncSetAuthUser,
};
