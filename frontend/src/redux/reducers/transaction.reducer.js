import {
  TRANSACTIONS_FAIL,
  TRANSACTIONS_REQUEST,
  TRANSACTIONS_SUCCESS,
  TRANSACTION_DETAILS_FAIL,
  TRANSACTION_DETAILS_REQUEST,
  TRANSACTION_DETAILS_SUCCESS,
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
        return {
          ...state,
          loading: true,
        };
  
      case TRANSACTION_DETAILS_SUCCESS:
        return {
          ...state,
          loading: false,
          transaction: payload.details
        };
  
      case TRANSACTION_DETAILS_FAIL:
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
  