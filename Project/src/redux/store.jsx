import cartReducer from "./CartSlice"
import userReducer from "./userSlicde"

const { configureStore } = require("@reduxjs/toolkit");

const rootReducer = {
  cart: cartReducer,
  user: userReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
