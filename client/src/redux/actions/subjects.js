import { 
  SUBJECTS_ADD_SUBJECT, 
  SUBJECTS_REMOVE_SUBJECT,
  SUBJECTS_UPDATE_SUBJECT,
  SUBJECTS_UPDATE_FAVORITE
} from "../constants/actionTypes";

const subjectsAddSubject = (subject) => async (dispatch) => {
  try {
    dispatch({type: SUBJECTS_ADD_SUBJECT, payload: subject})
  } catch(error) {
    console.log(error)
  }
}

const subjectsRemoveSubject = (id) => async (dispatch) => {
  try {
    dispatch({type: SUBJECTS_REMOVE_SUBJECT, payload: id})
  } catch(error) {
    console.log(error)
  }
}

const subjectsUpdateSubject = (subject) => async (dispatch) => {
  try {
    dispatch({type: SUBJECTS_UPDATE_SUBJECT, payload: subject})
  } catch(error) {
    console.log(error)
  }
}

const subjectsUpdateFavorite = (subject) => async (dispatch) => {
  try {
    dispatch({type: SUBJECTS_UPDATE_FAVORITE, payload: subject})
  } catch(error) {
    console.log(error)
  }
}

export {
  subjectsAddSubject, 
  subjectsRemoveSubject,
  subjectsUpdateSubject,
  subjectsUpdateFavorite
}