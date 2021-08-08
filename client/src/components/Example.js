import React from 'react'
import { SafeAreaView, StyleSheet, TextInput, Button, Text } from "react-native";
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
      id: 123,
      name: 'Math',
      grade:[
        {
          day: 'Monday',
          time: [0, 1, 2]
        }
      ],
      tasks: [
        { 
          id: Date.now(),
          name: 'math test',
          task: 'test about logarithm',
          limitDate: '15/08/2021',
        }
      ]
    }
    const newTask =  { 
      id: Date.now(),
      name: 'task',
      task: 'task about exponentiation',
      limitDate: '15/08/2021',
    }

    
    const clearName = () => {
      dispatch(userClearName())
    }

    const saveName = () => { 
      dispatch(userSetName(name))
      setName('')
    }

    const addSubject = () => {
      dispatch(subjectsAddSubject(subjectExample))
    }
    const removeSubject = () => {
      dispatch(subjectsRemoveSubject(subjectExample.id))
    }
    const updateSubject = () => {
      const updatedSubject = JSON.parse(JSON.stringify(subjectExample))
      updatedSubject.tasks.push(newTask)
      dispatch(subjectsUpdateSubject(updatedSubject))
    }

    console.log(subjectExample)
    console.log(subjects)
    console.log(user)

    return (
      <SafeAreaView>
        <Text>My name is:{' '}</Text>
        {user.name ? <Text>{user.name}</Text> : (
        <TextInput  
          value={name} 
          onChangeText={setName}
        />)}
        <Button onPress={saveName} title='Save name' />
        <Button onPress={clearName} title='Clear name' />
        <Button onPress={addSubject} title='Add subject' />
        <Button onPress={removeSubject} title='Remove subject' />
        <Button onPress={updateSubject} title='Update subject' />
      </SafeAreaView>
      )
}