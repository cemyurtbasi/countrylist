import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import countryListSlice from "./country/countryListSlice";
import countryDetailSlice from "./country/countryDetailSlice";

const combinedReducer = combineReducers({
  countryList: countryListSlice,
  countryDetail: countryDetailSlice,
});

const rootReducer = (state, action) => {
  if (action.type === "redux_reset") {
    state = undefined;
  }
  return combinedReducer(state, action);
};

export default configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware()],
});
