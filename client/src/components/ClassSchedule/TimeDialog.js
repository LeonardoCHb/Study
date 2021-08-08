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

  const [subject, setSubject] = useState(undefined)
  const [day, setDay] = useState(undefined)
  const [hour, setHour] = useState({start: undefined, end: undefined})

  const cleanUp = () => {
    setSubject(undefined)
    setDay(undefined)
    setHour({start: undefined, end: undefined})
  }

  const handleSubject = (_subject) => {setSubject(_subject)}
  const handleDay = (_day) => {setDay(_day)}
 
  const updateSubject = () => {
    if (subject && day && hour.start && hour.end) {
      const updatedSubject = JSON.parse(JSON.stringify(subject))
      const dayIndex = updatedSubject.grade.findIndex((weekDay) => weekDay.day === day)
      if (dayIndex !== -1) updatedSubject.grade[dayIndex].time.push({...hour})
      else updatedSubject.grade.push({day, time: [{...hour}]})
      dispatch(subjectsUpdateSubject(updatedSubject))
    }
  }

  const showStartDatePicker = () => {setDateStartPickerVisibility(true)};
  const hideStartDatePicker = () => {setDateStartPickerVisibility(false)};
  const handleStartConfirm = (date) => {
    const _hour = new Date(date)
    setHour({...hour, start: `${_hour.getHours()}:${_hour.getMinutes()}`})
    hideStartDatePicker();
  };

  const showEndDatePicker = () => {setDateEndtPickerVisibility(true)};
  const hideEndDatePicker = () => {setDateEndtPickerVisibility(false)};
  const handleEndConfirm = (date) => {
    const _hour = new Date(date)
    setHour({...hour, end: `${_hour.getHours()}:${_hour.getMinutes()}`})
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
        <Dialog visible={visible} onDismiss={() => {hideDialog(); cleanUp()}}>
          <Dialog.Title>Add subject to schedule</Dialog.Title>
          <View style={styles.lists}>
            <ScrollView>
              {subjects.map((_subject) => (
                <Button
                  onPress={() => handleSubject(_subject)}  
                  key={_subject.id}
                  color={ subject?.id === _subject.id ?'black' : 'white'}
                >{_subject.name}
                </Button>
              ))}
            </ScrollView>
            <ScrollView style={styles.list}>
              {['Sunday', 'Monday','Tuesday','Wednesday', 'Thursday','Friday','Saturday']
                .map((weekDay) => (
                <Button 
                  color={day === weekDay ? 'black' : 'white' }
                  key={weekDay} 
                  onPress={() => handleDay(weekDay)}
                  >{weekDay}
                </Button>
              ))}
            </ScrollView>
          </View>
          <Dialog.Content style={styles.buttons}>
            <Button color='black' onPress={showStartDatePicker}>Start {hour?.start ? hour?.start : ''}</Button>
            <Button color='black' onPress={showEndDatePicker}>End {hour?.end ? hour?.end : ''}</Button>
          </Dialog.Content>
          <Dialog.Actions >
            <Button color='black' onPress={() => {updateSubject(); cleanUp()}}>Add</Button>
            <Button color='black' onPress={() => {hideDialog(); cleanUp()}}>Close</Button>
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