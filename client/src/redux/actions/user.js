import { 
    USER_SET_NAME, 
    USER_CLEAR_NAME 
} from "../constants/actionTypes";

const userSetName = (name) => async (dispatch) => {
  try {
    dispatch({type: USER_SET_NAME, payload: name})
  } catch(error) {
    console.log(error)
  }
}

const userClearName = () => async (dispatch) => {
  try {
    dispatch({type: USER_CLEAR_NAME})
  } catch(error) {
    console.log(error)
  }
}

export {userSetName, userClearName}