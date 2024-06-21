import axios from "axios";
import {
  TRANSACTIONS_FAIL,
  TRANSACTIONS_REQUEST,
  TRANSACTIONS_SUCCESS,
  TRANSACTION_DETAILS_FAIL,
  TRANSACTION_DETAILS_REQUEST,
  TRANSACTION_DETAILS_SUCCESS,
} from "../actionTypes";

export const getTransactions = () => async (dispatch) => {
  try {
    dispatch({
      type: TRANSACTIONS_REQUEST,
    });

    let link = `http://localhost:4000/api/v1/my/transactions/12345`;

    const { data } = await axios.get(link);

    dispatch({
      type: TRANSACTIONS_SUCCESS,
      payload: { transactions: data.transactions },
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: TRANSACTIONS_FAIL,
    });
  }
};

export const getTransactionDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: TRANSACTION_DETAILS_REQUEST,
    });

    let link = `http://localhost:4000/api/v1/transaction/${id}`;

    const { data } = await axios.get(link);

    dispatch({
      type: TRANSACTION_DETAILS_SUCCESS,
      payload: { details: data.transaction },
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: TRANSACTION_DETAILS_FAIL,
    });
  }
};
