import { 
SUBJECTS_ADD_SUBJECT,
SUBJECTS_REMOVE_SUBJECT,
SUBJECTS_UPDATE_SUBJECT
} from "../constants/actionTypes";

const initialSubjects = []

const subjects = (state = initialSubjects, action) => {
  switch (action.type) {
    case SUBJECTS_REMOVE_SUBJECT: {
      return [...state.filter((subject) => subject.id !== action.payload)]
    } 
    case SUBJECTS_ADD_SUBJECT: {
      return [...state, action.payload];
    }
    case SUBJECTS_UPDATE_SUBJECT: {
      const subjectsList = state
      const pos = subjectsList.findIndex((subject) => subject.id === action.payload.id)
      if (pos !== -1) subjectsList[pos] = action.payload
      return [...subjectsList]
    }
    default:
      return state;
  }
}

export default subjects;