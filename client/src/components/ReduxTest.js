import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userSetName, userClearName } from '../redux/actions/user'
import { subjectsAddSubject, 
  subjectsRemoveSubject, 
  subjectsUpdateSubject 
} from '../redux/actions/subjects'

export default function ReduxTest(){
    const [name, setName] = React.useState('')
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user)
    const subjects = useSelector((state) => state.subjects)
    const subjectExample =   {
      id: Date.now(),
      name: 'Matematica',
      grade:[
        {
          day: 'Segunda',
          time: [0, 1, 2]
        }
      ],
      tasks: [
        { 
          id: Date.now(),
          name: 'Prova de matematica',
          task: 'Prova de sobre logaritmo',
          limitDate: '15/08/2021',
        }
      ]
    }

    const clearName = () => {
      dispatch(userClearName())
    }

    const saveName = () => { 
      dispatch(userSetName(name))
      setName('')
    }

    console.log(subjectExample)
    console.log(subjects)
    console.log(user)

    return (
      <div>Meu nome é:{' '}
        {user.name ? user.name : (
        <textarea 
        id='name' 
        value={name} 
        onChange={(e)=>setName(e.target.value)}
        />)}
        <br/>
        <button onClick={saveName}>Salvar nome</button>
        <button onClick={clearName}>Limpar nome</button>
      </div>
      )
}