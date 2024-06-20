import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase";
import {
  LOAD_PROFILE,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from "../actionTypes";

export const login = () => async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_REQUEST,
    });

    const provider = new GoogleAuthProvider();
    const res = await signInWithPopup(auth, provider);

    console.log(res);

    const accessToken = res.user.accessToken;
    const refreshToken = res._tokenResponse.refreshToken;

    const user = {
      userId: res.user.uid,
      userName: res.user.displayName,
      userEmail: res.user.email,
    };

    dispatch({
      type: LOGIN_SUCCESS,
      payload: { accessToken, refreshToken },
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
