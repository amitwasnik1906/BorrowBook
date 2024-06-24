import { SET_ACTIVE_ELEMENT_FAIL, SET_ACTIVE_ELEMENT_REQUEST, SET_ACTIVE_ELEMENT_SUCCESS } from "../actionTypes";

export const activeElementReducer = (state={activeType: ""}, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case SET_ACTIVE_ELEMENT_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case SET_ACTIVE_ELEMENT_SUCCESS:
        return {
          ...state,
          loading: false,
          activeType: payload.element,
        };
  
      case SET_ACTIVE_ELEMENT_FAIL:
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