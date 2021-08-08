import React, { useState } from "react";
import { View, Text } from "react-native";
import { Button, Dialog, Portal, TextInput, Checkbox } from "react-native-paper";

import { SUBJECTS_ADD_SUBJECT } from "../../redux/actions/subjects";
import { useDispatch, useSelector } from "react-redux";

import styles from "./AddTaskModal.styles";

export function AddTaskModal({ visible, hideDialog }) {
  const dispatch = useDispatch();
  const [taskName, setTaskName] = useState("");
  const [taskSubject, setTaskSubject] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [checked, setChecked] = React.useState(false);

  /* const newTask =  { 
    id: Date.now(),
    name: 'task',
    task: 'task about exponentiation',
    limitDate: '15/08/2021',
  } */

  const addSubject = () => {
    const newTask = {
        id: Date.now(),
        name: taskName,
        subject: taskSubject,
        task: taskDescription,
        isExam: checked,
        
    }
    dispatch(SUBJECTS_ADD_SUBJECT(newTask))

}
/* 
useEffect(() => {
    
  }, []); */


  return (
    <View>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Create your next activity!</Dialog.Title>
          <Dialog.Content>
            <TextInput
              style={styles.input}
              placeholder="Activity Name"
              mode="outlined"
              value={taskName}
              onChangeText={(taskName) => setTaskName(taskName)}
              left={<TextInput.Icon name="text" />}
            />
            <TextInput
              style={styles.input}
              placeholder="Subject"
              mode="outlined"
              value={taskSubject}
              onChangeText={(taskSubject) => setTaskSubject(taskSubject)}
              left={<TextInput.Icon name="text" />}
            />
            <TextInput
              style={styles.input}
              placeholder="Description"
              mode="outlined"
              value={taskDescription}
              onChangeText={(taskDescription) => setTaskDescription(taskDescription)}
              left={<TextInput.Icon name="text" />}
            />
            <View
            style={styles.container}
            >
                <Checkbox
                  status={checked ? "checked" : "unchecked"}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />
                <Text
                style={styles.text}
                >It's a Exam</Text>
            </View>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => hideDialog, addSubject}>CREATE</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
}
