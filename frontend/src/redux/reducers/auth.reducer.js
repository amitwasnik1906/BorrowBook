import {
  LOAD_PROFILE,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from "../actionTypes";



export const authReducer = (prevState = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...prevState,
        loading: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...prevState,
        loading: false,
        accessToken: payload.accessToken,
        refreshToken: payload.refreshToken,
      };

    case LOGIN_FAIL:
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

    default:
      return prevState;

  }
};
