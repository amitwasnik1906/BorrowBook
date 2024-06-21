import { combineReducers, configureStore, createSlice } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/auth.reducer";
import { transactionDetailsReducer, transactionsReducer } from "./reducers/transaction.reducer";

const initialState = {};

const rootReducer = combineReducers({
  auth: authReducer,
  transactions: transactionsReducer,
  transactionDetails: transactionDetailsReducer
});

const store = configureStore({
  reducer: rootReducer
});

export default store;
