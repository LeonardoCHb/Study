import React from 'react'
import { SafeAreaView, StyleSheet, TextInput, Button, Text } from "react-native";
import { useDispatch, useSelector } from 'react-redux'
import { userSetName, userClearName, userSetGender, userClearGender } from '../redux/actions/user'
import { subjectsAddSubject, 
  subjectsRemoveSubject, 
  subjectsUpdateSubject 
} from '../redux/actions/subjects'

export default function ReduxTest(){
    const [name, setName] = React.useState('')
    const [gender, setGender] = React.useState('')
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user)
    const subjects = useSelector((state) => state.subjects)
    const subjectExample =   {
      id: 123,
      name: 'Math',
      grade:[
        {
          day: 'Monday',
          time: []
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
    const clearGender = () => {
      dispatch(userClearGender())
    }

    const saveName = () => { 
      dispatch(userSetName(name))
      setName('')
    }
    const saveGender = () => { 
      dispatch(userSetGender(gender))
      setGender('')
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
        <Text>My gender is:{' '}</Text>
        {user.gender ? <Text>{user.gender}</Text> : (
        <TextInput  
          value={gender} 
          onChangeText={setGender}
        />)}
        <Button onPress={saveName} title='Save name' />
        <Button onPress={saveGender} title='Save gender' />
        <Button onPress={clearName} title='Clear name' />
        <Button onPress={clearGender} title='Clear gender' />
        <Button onPress={addSubject} title='Add subject' />
        <Button onPress={removeSubject} title='Remove subject' />
        <Button onPress={updateSubject} title='Update subject' />
      </SafeAreaView>
      )
}