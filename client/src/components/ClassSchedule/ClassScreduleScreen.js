import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Button, Card, Chip, List, Title } from 'react-native-paper';

import Entypo from "react-native-vector-icons/Entypo";

import { useSelector, useDispatch } from 'react-redux';
import { subjectsUpdateSubject } from '../../redux/actions/subjects';

import CreateSubject from './CreateSubjectDialog';
import SelectTimeSpan from './TimeDialog';

const initialDays = [
  {day: 'Sunday',subjects: []},
  {day: 'Monday',subjects: []},
  {day: 'Tuesday',subjects: []},
  {day: 'Wednesday',subjects: []},
  {day: 'Thursday',subjects: []},
  {day: 'Friday',subjects: []},
  {day: 'Saturday',subjects: []},
]
const daysIndexes = {Sunday: 0,Monday: 1,Tuesday: 2,Wednesday: 3,Thursday: 4,Friday: 5,Saturday: 6}
const daysNames = {0:'Sunday',1:'Monday',2:'Tuesday',3:'Wednesday',4:'Thursday',5:'Friday',6:'Saturday'}

export function ClassScheduleScreen() {
  const dispatch = useDispatch()
  const date = new Date
  const subjects = useSelector((state) => state.subjects)
  const [days, setDays] = useState(JSON.parse(JSON.stringify(initialDays)))
  const [day, setDay] = useState(date.getDay());
  const [visible, setVisible] = React.useState(false);
  const [visibleCreate, setVisibleCreate] = React.useState(false)

  const showTimeDialog = () => setVisible(true);
  const hideTimeDialog = () => setVisible(false);

  const showCreateSubjectDialog = () => setVisibleCreate(true);
  const hideCreateSubjectDialog = () => setVisibleCreate(false);

  // console.log(days[day])

  useEffect(() => {
    if (subjects) {
      const newDays = JSON.parse(JSON.stringify(initialDays))
      
      subjects.forEach((subject) => {
        subject.grade.forEach((subjectDay) => {
          subjectDay.time.forEach((time) => {
            newDays[daysIndexes[subjectDay.day]]
            .subjects.push({id: subject.id, name: subject.name, hour: time})
          })
        })
      })
      newDays.forEach((_day) => {
        _day.subjects.sort((subject1,subject2) => {
          const timeOne = (parseInt(subject1.hour.start.split(':')[0])*60)+parseInt(subject1.hour.start.split(':')[1])
          const timeTwo = (parseInt(subject2.hour.start.split(':')[0])*60)+parseInt(subject2.hour.start.split(':')[1])
          return timeOne > timeTwo
        })
      })
      setDays(newDays)
    }
  }, [subjects])

  const removeHour = (subject, _day) => {
    const indexSubject = subjects.findIndex((_subject) => _subject.id === subject.id)
    const updatedSubject = JSON.parse(JSON.stringify(subjects[indexSubject]))
    const indexGradeDay = updatedSubject.grade.findIndex((gradeDay) => gradeDay.day === daysNames[_day])
    updatedSubject.grade[indexGradeDay].time = updatedSubject.grade[indexGradeDay].time
    .filter((hour) => (hour.start !== subject.hour.start) && (hour.end !== subject.hour.end))
    dispatch(subjectsUpdateSubject(updatedSubject))
  }

  return (
    <View style={styles.container}>
      <SelectTimeSpan visible={visible} hideDialog={hideTimeDialog}/>
      <CreateSubject visible={visibleCreate} hideDialog={hideCreateSubjectDialog}/>
      <Card style={styles.card}>
        <View style={styles.chips}>
          <Chip style={styles.chip} onPress={() => setDay(0)}>Sun</Chip>
          <Chip style={styles.chip} onPress={() => setDay(1)}>Mon</Chip>
          <Chip style={styles.chip} onPress={() => setDay(2)}>Tues</Chip>
          <Chip style={styles.chip} onPress={() => setDay(3)}>Wed</Chip>
          <Chip style={styles.chip} onPress={() => setDay(4)}>Thurs</Chip>
          <Chip style={styles.chip} onPress={() => setDay(5)}>Fri</Chip>
          <Chip style={styles.chip} onPress={() => setDay(6)}>Sat</Chip>
        </View>
        <Card.Title title={days[day].day} />
        <Card.Content style={styles.cardContent}>
          <Title>Subjects</Title>
          <ScrollView style={styles.list}>
          {days[day].subjects.map((subject, index) => (
            <List.Item 
              key={index}
              title={`${subject.name} - Start: ${subject.hour.start} End: ${subject.hour.end}`} 
              right={() => <Entypo onPress={() => removeHour(subject, day)} name="trash" size={30}/>}
              />
          ))}
          </ScrollView>
        </Card.Content>
        <Card.Actions style={styles.buttons}>
          <Button color="black" onPress={showCreateSubjectDialog}>Subjects manager</Button>
          <Button color="black" onPress={showTimeDialog}>Add to schedule</Button>
        </Card.Actions>
      </Card>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0078FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40
  },
  card: {
    flex: 1,
    width: '100%',
  },
  cardContent: {
    flex: 1 
  },
  buttons: {
    display:'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {},
  chip:{
    margin: 1,
    height: 30
  },
  chips: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 3
  },
  list:{
    height: '100%'
  }
});