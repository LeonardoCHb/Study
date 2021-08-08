import { combineReducers } from 'redux';

import user from './user.js'
import subjects from './subjects.js';

export default combineReducers({user, subjects})

/*
// redux objects models example
 const model = 
{
  user : {name: undefined | string},
  subjects: [
    {
      id: string,
      name: string,
      grade:[
        {
          day: string,
          time: [int]
        }
      ],
      tasks: [
        { 
          id: string,
          name: string,
          task: string,
          limitDate: date,
        }
      ],
      favorite: boolean
    }
  ]
}
*/