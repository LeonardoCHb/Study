import { 
  USER_SET_NAME,
  USER_SET_GENDER, 
  USER_CLEAR_NAME,
  USER_CLEAR_GENDER 
} from "../constants/actionTypes";

const initialUser = {
  name: undefined,
  gender: undefined
}

const user = (state = {...initialUser}, action) => {
  switch (action.type) {
    case USER_CLEAR_NAME:
      return {...state, name: undefined}
    case USER_CLEAR_GENDER:
      return {...state, gender: undefined}
    case USER_SET_NAME:
      return {...state, name: action.payload};
    case USER_SET_GENDER:
      return {...state, gender: action.payload};
    default:
      return state;
  }
}

export default user;