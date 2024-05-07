import { getUserLogged, login, putAccessToken } from "../../utils/network-data";

const ActionType = {
  SET_AUTH_USER: "SET_AUTH_USER",
  UNSET_AUTH_USER: "UNSET_AUTH_USER",
  RECEIVE_USER_LOGGED: "RECEIVE_USER_LOGGED",
};

function setAuthUserActionCreator(accessToken) {
  return {
    type: ActionType.SET_AUTH_USER,
    payload: {
      accessToken,
    },
  };
}

function unsetAuthUserActionCreator() {
  localStorage.clear();
  return {
    type: ActionType.UNSET_AUTH_USER,
    payload: {
      user: null,
    },
  };
}

function receiveUserLoggedActionCreator(user) {
  return {
    type: ActionType.RECEIVE_USER_LOGGED,
    payload: {
      user,
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

function asyncReceiveUserLogged() {
  return async (dispatch) => {
    try {
      const { data } = await getUserLogged();
      dispatch(receiveUserLoggedActionCreator(data));
    } catch (error) {
      console.log(error);
    }
  };
}

export {
  ActionType,
  setAuthUserActionCreator,
  unsetAuthUserActionCreator,
  receiveUserLoggedActionCreator,
  asyncSetAuthUser,
  asyncReceiveUserLogged,
};
