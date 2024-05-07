import { getUserLogged } from "../../utils/network-data";

const ActionType = {
  RECEIVE_USER_LOGGED: "RECEIVE_USER_LOGGED",
};

function receiveUserLoggedActionCreator(user) {
  return {
    type: ActionType.RECEIVE_USER_LOGGED,
    payload: {
      user,
    },
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

export { ActionType, receiveUserLoggedActionCreator, asyncReceiveUserLogged };
