import axios from "axios";
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

export const getTransactions = (userId, type, keyword) => async (dispatch) => {
  try {
    dispatch({
      type: TRANSACTIONS_REQUEST,
    });

    let link = `${String(import.meta.env.VITE_APP_BACKEND_URI)}/api/v1/my/transactions/${userId}`;

    if ((type === "Borrow" || type === "Lend") && keyword) {
      link = `${String(import.meta.env.VITE_APP_BACKEND_URI)}/api/v1/my/transactions/${userId}?type=${type}&keyword=${keyword}`;
    }

    if ((type === "Borrow" || type === "Lend") && !keyword) {
      link = `${String(import.meta.env.VITE_APP_BACKEND_URI)}/api/v1/my/transactions/${userId}?type=${type}`;
    }

    if(type !== "Borrow" && type !== "Lend" && keyword){
      link = `${String(import.meta.env.VITE_APP_BACKEND_URI)}/v1/my/transactions/${userId}?keyword=${keyword}`;
    }

    // console.log(link);

    const { data } = await axios.get(link);

    dispatch({
      type: TRANSACTIONS_SUCCESS,
      payload: { transactions: data.transactions },
    });
  } catch (error) {
    console.log(error.response.data.message);
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

    let link = `${String(import.meta.env.VITE_APP_BACKEND_URI)}/api/v1/transaction/${id}`;

    const { data } = await axios.get(link);

    dispatch({
      type: TRANSACTION_DETAILS_SUCCESS,
      payload: { details: data.transaction },
    });
  } catch (error) {
    console.log(error.response.data.message);
    dispatch({
      type: TRANSACTION_DETAILS_FAIL,
    });
  }
};

export const newTransaction = (newData, type) => async (dispatch) => {
  try {
    dispatch({
      type: NEW_TRANSACTION_REQUEST,
    });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      `${String(import.meta.env.VITE_APP_BACKEND_URI)}/api/v1/transaction/new`,
      newData,
      config
    );

    dispatch({
      type: NEW_TRANSACTION_SUCCESS,
      payload: { transaction: data.transaction },
    });

    const user = JSON.parse(localStorage.getItem("BorrowBook-user"));
    dispatch(getTransactions(user.userId, type));
  } catch (error) {
    console.log(error.response.data.message);
    dispatch({
      type: NEW_TRANSACTION_FAIL,
    });
  }
};

export const deleteTransaction = (_id, activeType) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_TRANSACTION_REQUEST,
    });

    await axios.delete(`${String(import.meta.env.VITE_APP_BACKEND_URI)}/api/v1/transaction/${_id}`);

    dispatch({
      type: DELETE_TRANSACTION_SUCCESS,
      payload: { isDeleted: true },
    });

    const user = JSON.parse(localStorage.getItem("BorrowBook-user"));

    dispatch(getTransactions(user.userId, activeType));
  } catch (error) {
    console.log(error);
    dispatch({
      type: DELETE_TRANSACTION_FAIL,
      payload: { isDeleted: false },
    });
  }
};

export const updateTransaction = (_id, newData) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_TRANSACTION_REQUEST,
    });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `${String(import.meta.env.VITE_APP_BACKEND_URI)}/api/v1/transaction/${_id}`,
      newData,
      config
    );

    dispatch({
      type: UPDATE_TRANSACTION_SUCCESS,
      payload: { transaction: data.transaction },
    });

    dispatch(getTransactionDetails(_id));
  } catch (error) {
    console.log(error.response.data.message);
    dispatch({
      type: UPDATE_TRANSACTION_FAIL,
    });
  }
};
