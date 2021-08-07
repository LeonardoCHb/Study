import { 
  USER_SET_NAME, 
  USER_CLEAR_NAME 
} from "../constants/actionTypes";

const initialUser = {
  name: undefined,
}

const user = (state = {...initialUser}, action) => {
  switch (action.type) {
    case USER_CLEAR_NAME:
      return {...state, name: undefined}
    case USER_SET_NAME:
      return {...state, name: action.payload};
    default:
      return state;
  }
}

export default user;