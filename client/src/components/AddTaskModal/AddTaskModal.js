import * as React from "react";
import { View, ScrollView } from "react-native";
import { Button, Dialog, Portal, TextInput, Text } from "react-native-paper";

import DateTimePickerModal from "react-native-modal-datetime-picker";

import { useDispatch, useSelector } from "react-redux";
import { subjectsUpdateSubject } from "../../redux/actions/subjects";

export function AddTaskModal({ visible, hideDialog }) {
  const dispatch = useDispatch()
  const subjects = useSelector((state) => state.subjects)
  const [subject, setSubject] = React.useState(undefined)
  const [name, setName] = React.useState('');
  const [task, setTask] = React.useState('');
  const [date, setDate] = React.useState(undefined)
  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);

  const cleanUp = () => {
    setSubject(undefined)
    setName('')
    setTask('')
    setDate(undefined)
  }

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (limitDate) => {
    setDate(limitDate)
    hideDatePicker();
  };

  const handleCreateTask = () => {
    if (name.length > 0 && task.length > 0 && date && subject) {
      const newTask = {
        id: Date.now(),
        name: name,
        task: task,
        limitDate: date.toLocaleDateString(),
      }
      const newSubject = JSON.parse(JSON.stringify(subject))
      newSubject.tasks.push(newTask)
      dispatch(subjectsUpdateSubject(newSubject))
    }
  }

  const handleSubject = (_subject) => {
    setSubject(_subject)
  }

  return (
    <View>
      <Portal>
        <Dialog visible={visible} onDismiss={() => {hideDialog(); cleanUp()}}>
          <Dialog.Title>Create activity</Dialog.Title>
          <Dialog.Content>
          <Text>Select the respective subject</Text>
            <ScrollView style={{height: 200}}>
              {subjects.map((_subject) => (
                <Button 
                  key={_subject.id}
                  onPress={() => handleSubject(_subject)}  
                  color={subject?.id === _subject.id ? 'blue':'black'}  
                >{_subject.name}
                </Button>
              ))}
            </ScrollView>
            <TextInput
              placeholder="Task Name"
              mode="outlined"
              value={name}
              onChangeText={(text) => setName(text)}
            />
            <TextInput
              mode="outlined"
              placeholder="Task description"
              value={task}
              onChangeText={(text) => setTask(text)}
            />
            <Button onPress={showDatePicker}>Select the limit date.</Button>
            {date && <Text>Limit Date: {date.toLocaleDateString()}</Text>}
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
          </Dialog.Content>
          <Dialog.Actions style={{display: 'flex', justifyContent:'space-between'}}>
            <Button onPress={() => {handleCreateTask(); cleanUp()}}>Save</Button>
            <Button onPress={() => {hideDialog(); cleanUp()}}>Cancel</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
}
