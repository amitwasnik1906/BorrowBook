import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase";
import {
  LOAD_PROFILE,
  LOAD_USER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_FAIL,
  LOGOUT_SUCCESS,
} from "../actionTypes";

export const login = () => async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_REQUEST,
    });

    const provider = new GoogleAuthProvider();
    const res = await signInWithPopup(auth, provider);

    const accessToken = res.user.accessToken;
    const refreshToken = res._tokenResponse.refreshToken;

    const user = {
      userId: res.user.uid,
      userName: res.user.displayName,
      userEmail: res.user.email,
      photoURL: res.user.photoURL
    };

    localStorage.setItem("BorrowBook-user", JSON.stringify(user));
    localStorage.setItem("BorrowBook-accessToken", JSON.stringify(accessToken));
    localStorage.setItem("BorrowBook-refreshToken", JSON.stringify(refreshToken));

    dispatch({
      type: LOGIN_SUCCESS,
      payload: { accessToken, refreshToken, user },
    });

    dispatch({
      type: LOAD_PROFILE,
      payload: { user },
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

// Load User
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST });

    const user = localStorage.getItem("BorrowBook-user")
      ? JSON.parse(localStorage.getItem("BorrowBook-user"))
      : null;
    const accessToken = localStorage.getItem("BorrowBook-accessToken")
      ? localStorage.getItem("BorrowBook-accessToken")
      : null;
    const refreshToken = localStorage.getItem("refreshToken")
      ? localStorage.getItem("BorrowBook-refreshToken")
      : null;

    dispatch({
      type: LOAD_USER_SUCCESS,
      payload: { user, accessToken, refreshToken },
    });
  } catch (error) {
    console.log(error);
    dispatch({ type: LOAD_USER_FAIL });
  }
};

export const logout = () => (dispatch) => {
  try {
    localStorage.removeItem("BorrowBook-user")
    localStorage.removeItem("BorrowBook-accessToken")
    localStorage.removeItem("BorrowBook-refreshToken")
    
    dispatch({
      type: LOGOUT_SUCCESS
    })
  } catch (error) {
    console.log(error);
    dispatch({
      type: LOGOUT_FAIL
    })
  }
};
