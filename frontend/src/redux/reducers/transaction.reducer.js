import {
  DELETE_TRANSACTION_FAIL,
  DELETE_TRANSACTION_REQUEST,
  DELETE_TRANSACTION_SUCCESS,
  NEW_TRANSACTION_FAIL,
  NEW_TRANSACTION_REQUEST,
  NEW_TRANSACTION_SUCCESS,
  TRANSACTIONS_FAIL,
  TRANSACTIONS_REQUEST,
  TRANSACTIONS_SUCCESS,
  TRANSACTION_DETAILS_FAIL,
  TRANSACTION_DETAILS_REQUEST,
  TRANSACTION_DETAILS_SUCCESS,
  UPDATE_TRANSACTION_FAIL,
  UPDATE_TRANSACTION_REQUEST,
  UPDATE_TRANSACTION_SUCCESS,
} from "../actionTypes";

export const transactionsReducer = (
  state = { transactions: [], loading: false },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case TRANSACTIONS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case TRANSACTIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        transactions: payload.transactions,
      };

    case TRANSACTIONS_FAIL:
      return {
        ...state,
        loading: false,
      };

    default:
      return {
        ...state,
        loading: false,
      };
  }
};

export const transactionDetailsReducer = (
  state = { transaction: null, loading: false },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case TRANSACTION_DETAILS_REQUEST:
    case DELETE_TRANSACTION_REQUEST:
    case UPDATE_TRANSACTION_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case TRANSACTION_DETAILS_SUCCESS:
    case UPDATE_TRANSACTION_SUCCESS:
      return {
        ...state,
        loading: false,
        transaction: payload.details,
      };

    case DELETE_TRANSACTION_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: payload.isDeleted,
      };

    case DELETE_TRANSACTION_FAIL:
      return {
        ...state,
        loading: false,
        isDeleted: payload.isDeleted,
      };

    case TRANSACTION_DETAILS_FAIL:
    case UPDATE_TRANSACTION_FAIL:
      return {
        ...state,
        loading: false,
      };

    default:
      return {
        ...state,
        loading: false,
      };
  }
};

export const newTransactionReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case NEW_TRANSACTION_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case NEW_TRANSACTION_SUCCESS:
      return {
        ...state,
        loading: false,
        transaction: payload.transaction,
      };

    case NEW_TRANSACTION_FAIL:
      return {
        ...state,
        loading: false,
      };

    default:
      return {
        ...state,
        loading: false,
      };
  }
};
