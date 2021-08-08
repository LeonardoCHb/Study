import React, {useState} from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Button, Dialog, Portal, TextInput, Paragraph, Text } from 'react-native-paper';
import Entypo from "react-native-vector-icons/Entypo";
import { useSelector, useDispatch } from 'react-redux';

import { subjectsUpdateSubject, subjectsAddSubject, subjectsRemoveSubject } from '../../redux/actions/subjects';


const CreateSubject = ({visible, hideDialog}) => {
  const dispatch = useDispatch()
  const subjects = useSelector((state) => state.subjects)
  const [name, setName] = useState('')
  const [subjectToUpdate, setSubjectToUpdate] = useState(undefined)
  const [subjectToRemove, setSubjectToRemove] = useState(undefined)

  const cleanUp = () => {
    setName('')
    setSubjectToUpdate(undefined)
    setSubjectToRemove(undefined)
  }

  const updateSubject = () => {
    if (name.length > 0) {
      if (subjectToUpdate) {
        const newSubject = JSON.parse(JSON.stringify(subjectToUpdate))
        newSubject.name = name
        dispatch(subjectsUpdateSubject(newSubject))
      } else {
        const newSubject = {
          id: Date.now(),
          name: name,
          favorite: false,
          grade:[],
          tasks: []
        }
        dispatch(subjectsAddSubject(newSubject))
      }
    }
  }

  const handleSubject = (subject) => {
    setSubjectToUpdate(subject)
  }

  const handleTrashSubject = () => {
    if (subjectToRemove) {
      dispatch(subjectsRemoveSubject(subjectToRemove.id))
      setSubjectToRemove(undefined)
    }
  }

  return (
    <View>
      <Portal>
        <Dialog visible={visible} onDismiss={() => {hideDialog(); cleanUp()}}>
          <Dialog.Title>{subjectToUpdate ? 'Editing' : 'Creating'} subject</Dialog.Title>
          <Dialog.Content>
            <Paragraph>You just need to give a name to the subject.</Paragraph>
          </Dialog.Content>
          <View style={styles.lists}>
            <ScrollView>
              {subjects.map((_subject) => (
                <View key={_subject.id} style={styles.subject}>
                  <Button
                    onPress={() => handleSubject(_subject)}  
                    color={'black'}  
                    style={styles.subjectButton}
                  >{_subject.name}
                  </Button>
                  <Entypo 
                    style={styles.trash} 
                    onPress={() => {setSubjectToRemove(_subject)}}
                    name="trash" 
                    size={30}
                  />
                </View>
              ))}
            </ScrollView>
            <Button 
              color='black' 
              onPress={() => {setSubjectToUpdate(undefined)}}
            >
              New Subject
            </Button>
          </View>
          {subjectToRemove ? <Text>Do you really want to remove {subjectToRemove.name}?</Text>:<TextInput
            style={styles.inputName}
            label="Subject name"
            value={name}
            onChangeText={text => setName(text)}
          />}
          {subjectToRemove && <>
            <Button color='black' onPress={handleTrashSubject}>Yes</Button>
            <Button color='black' onPress={() => {setSubjectToRemove(undefined)}}>No</Button>
            </>
          }
          <Dialog.Actions style={styles.buttons}>
            <Button color='black' onPress={() => {updateSubject(); cleanUp()}}>Save</Button>
            <Button color='black' onPress={() => {hideDialog(); cleanUp()}}>Close</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

const styles = StyleSheet.create({
  lists: {
    backgroundColor: 'gray',
    height: 300,
    paddingTop: 2
  },
  inputName: {
    width: '100%'
  },
  buttons:{
    display:'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 2,
    marginLeft: 10,
    marginRight: 10
  },
  subject: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  trash: {
    marginRight: 5
  },
  subjectButton: {
    width: 300
  }
});

export default CreateSubject;