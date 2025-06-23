import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import authReducer from "./Auth/authSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    counter: counterReducer,
  },
});
export default store;
