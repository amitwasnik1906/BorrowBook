import { combineReducers, configureStore, createSlice } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/auth.reducer";
import { newTransactionReducer, transactionDetailsReducer, transactionsReducer } from "./reducers/transaction.reducer";
import { activeElementReducer } from "./reducers/activeElement.reducer";

const initialState = {};

const rootReducer = combineReducers({
  auth: authReducer,
  transactions: transactionsReducer,
  transactionDetails: transactionDetailsReducer,
  newTransaction: newTransactionReducer,
  activeElement: activeElementReducer
});

const store = configureStore({
  reducer: rootReducer
});

export default store;
