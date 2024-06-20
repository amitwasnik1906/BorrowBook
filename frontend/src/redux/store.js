import { combineReducers, configureStore, createSlice } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/auth.reducer";

const sampleSlice = createSlice({
  name: "sample",
  initialState: {
    name: "amit",
    age: 20,
  },
  reducers: {},
});

const initialState = {};

const rootReducer = combineReducers({
  sample: sampleSlice.reducer,
  auth: authReducer
});

const store = configureStore({
  reducer: rootReducer,
  initialState,
});

export default store;
