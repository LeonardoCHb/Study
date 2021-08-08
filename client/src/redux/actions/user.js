import { 
    USER_SET_NAME,
    USER_SET_GENDER, 
    USER_CLEAR_NAME,
    USER_CLEAR_GENDER
} from "../constants/actionTypes";

const userSetName = (name) => async (dispatch) => {
  try {
    dispatch({type: USER_SET_NAME, payload: name})
  } catch(error) {
    console.log(error)
  }
}

const userSetGender = (gender) => async (dispatch) => {
  try {
    dispatch({type: USER_SET_GENDER, payload: gender})
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

const userClearGender = () => async (dispatch) => {
  try {
    dispatch({type: USER_CLEAR_GENDER})
  } catch(error) {
    console.log(error)
  }
}

export {userSetName, userSetGender, userClearName, userClearGender}