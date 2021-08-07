import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styles  from "./CalendarScreen.style";
import { Calendar } from "react-native-calendars";

export function CalendarScreen() {
  return (
    <View style={styles.container}>
        <Calendar 
            theme={{
                calendarBackground: styles.container.backgroundColor,
                textDisabledColor: '#C0C0C0',
                monthTextColor: '#00BFFF',
                todayTextColor: '#00BFFF'
            }}
        />
        <View style={{backgroundColor: 'blue'}}>
            <Text>asdf</Text>
        </View>
        <StatusBar style="auto" />
    </View>
  );
}
