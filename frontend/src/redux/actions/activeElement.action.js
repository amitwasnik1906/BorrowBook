import { SET_ACTIVE_ELEMENT_FAIL, SET_ACTIVE_ELEMENT_REQUEST, SET_ACTIVE_ELEMENT_SUCCESS } from "../actionTypes";

export const setActiveElement = (element) => async (dispatch) =>{
    try {
        dispatch({
            type:SET_ACTIVE_ELEMENT_REQUEST
        })
        dispatch({
            type:SET_ACTIVE_ELEMENT_SUCCESS,
            payload: {element}
        })
        
    } catch (error) {
        console.log(error);
        dispatch({
            type:SET_ACTIVE_ELEMENT_FAIL
        })
    }
}