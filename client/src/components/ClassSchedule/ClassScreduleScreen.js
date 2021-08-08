import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Button, Card, Chip, Title } from 'react-native-paper';

import { useSelector } from 'react-redux';

import SelectTimeSpan from './TimeDialog';
import ReduxTest from '../Example'

function mod(n, m) {
  return ((n % m) + m) % m;
}

const initialDays = [
  {
    day: 'Sunday',
    subjects: []
  },
  {
    day: 'Monday',
    subjects: []
  },
  {
    day: 'Tuesday',
    subjects: []
  },
  {
    day: 'Wednesday',
    subjects: []
  },
  {
    day: 'Thursday',
    subjects: []
  },
  {
    day: 'Friday',
    subjects: []
  },
  {
    day: 'Saturday',
    subjects: []
  },
]

const daysIndexes = {
  Sunday: 0,
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6
}

export function ClassScheduleScreen() {
  const date = new Date
  const subjects = useSelector((state) => state.subjects)
  const [days, setDays] = useState(JSON.parse(JSON.stringify(initialDays)))
  const [day, setDay] = useState(date.getDay());
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  useEffect(() => {
    if (subjects) {
      const newDays = JSON.parse(JSON.stringify(days))
      subjects.forEach((subject) => {
        subject.grade.forEach((subjectDay) => {
          subjectDay.time.forEach((time) => {
            newDays[daysIndexes[subjectDay.day]]
            .subjects.push({name: subject.name, hour: time})
          })
        })
      })
      setDays(newDays)
    }
  }, [subjects])

  const updateSubject = () => {}

  return (
    <View style={styles.container}>
      <SelectTimeSpan visible={visible} hideDialog={hideDialog}/>
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
          {days[day].subjects.map((subject) => {})}
        </Card.Content>
        <Card.Actions>
          <Button style={styles.button} color="black" onPress={showDialog}>Add subject</Button>
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
  },
  card: {
    flex: 1,
    width: '100%',
  },
  cardContent: {
    flex: 1 
  }, 
  button: {
    width: '100%',
  },
  chip:{
    margin: 1,
    height: 30
  },
  chips: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 3
  }
});