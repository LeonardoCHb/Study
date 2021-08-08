import React, {useState} from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Button, Dialog, Portal } from 'react-native-paper';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useSelector, useDispatch } from 'react-redux';

import { subjectsUpdateSubject } from '../../redux/actions/subjects';


const SelectTimeSpan = ({visible, hideDialog}) => {
  const dispatch = useDispatch()
  const subjects = useSelector((state) => state.subjects)
  const [isDateStartPickerVisible, setDateStartPickerVisibility] = useState(false);
  const [isDateEndPickerVisible, setDateEndtPickerVisibility] = useState(false);

  console.log(subjects)

  const handleSubject = (subject) => {
    console.log(subject)
  }
  const handleDay = (day) => {
    console.log(day)
  }

  const updateSubject = () => {}

  const showStartDatePicker = () => {setDateStartPickerVisibility(true)};
  const hideStartDatePicker = () => {setDateStartPickerVisibility(false)};
  const handleStartConfirm = (date) => {
    console.log("A start date has been picked: ", date);
    hideStartDatePicker();
  };

  const showEndDatePicker = () => {setDateEndtPickerVisibility(true)};
  const hideEndDatePicker = () => {setDateEndtPickerVisibility(false)};
  const handleEndConfirm = (date) => {
    console.log("A end date has been picked: ", date);
    hideEndDatePicker();
  };

  return (
    <View>
      <Portal>
        <DateTimePickerModal
          isVisible={isDateStartPickerVisible}
          mode="time"
          onConfirm={handleStartConfirm}
          onCancel={hideStartDatePicker}
        />
        <DateTimePickerModal
          isVisible={isDateEndPickerVisible}
          mode="time"
          onConfirm={handleEndConfirm}
          onCancel={hideEndDatePicker}
        />
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Add subject to schedule</Dialog.Title>
          <View style={styles.lists}>
            <ScrollView>
              {subjects.map((subject) => (
                <Button
                  onPress={() => handleSubject(subject)}  
                  key={subject.id}
                  color='black'
                >{subject.name}
                </Button>
              ))}
            </ScrollView>
            <ScrollView style={styles.list}>
              {['Sunday', 'Monday','Tuesday','Wednesday', 'Thursday','Friday','Saturday']
                .map((day) => (
                <Button color='black' key={day} onPress={() => handleDay(day)}>
                {day}
                </Button>
              ))}
            </ScrollView>
          </View>
          <Dialog.Content style={styles.buttons}>
            <Button color='black' onPress={showStartDatePicker}>Start</Button>
            <Button color='black' onPress={showEndDatePicker}>End</Button>
          </Dialog.Content>
          <Dialog.Actions >
            <Button color='black' onPress={() => {}}>Add</Button>
            <Button color='black' onPress={hideDialog}>Close</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

const styles = StyleSheet.create({
  lists: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'gray',
    height: 300
  },
  list: {
    height: '100%',
    maxHeight: '100%',
    overflow: 'scroll'
  },
  buttons:{
    display:'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 2
  }
});

export default SelectTimeSpan;