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



export const authReducer = (prevState = {user: null}, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_REQUEST:
    case LOAD_USER_REQUEST:
      return {
        ...prevState,
        loading: true,
      };

    case LOGIN_SUCCESS:
    case LOAD_USER_SUCCESS:
      return {
        ...prevState,
        loading: false,
        user: payload.user,
        accessToken: payload.accessToken,
        refreshToken: payload.refreshToken,
      };

    case LOGIN_FAIL:
    case LOAD_USER_FAIL:
      return {
        ...prevState,
        loading: false,
        accessToken: null,
        refreshToken: null,
      };

    case LOAD_PROFILE:
      return {
        ...prevState,
        user: payload.user,
      };

    case LOGOUT_SUCCESS:
      return{
        ...prevState,
        loading: false,
        accessToken: null,
        refreshToken: null,
        user: null
      }

    case LOGOUT_FAIL:
      return{
        ...prevState,
        loading: false
      }

    default:
      return prevState;

  }
};
