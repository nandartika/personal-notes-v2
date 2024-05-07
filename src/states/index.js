import { configureStore } from "@reduxjs/toolkit";
import authUserReducer from "./authUser/reducer";
import userReducer from "./user/reducer";

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    user: userReducer,
  },
});

export default store;
