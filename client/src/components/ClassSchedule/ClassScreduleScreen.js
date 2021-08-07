import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import ReduxTest from '../Example'

export function ClassScheduleScreen() {
  return (
    <View style={styles.container}>
      <Text>Your Class Schedule</Text>
      <ReduxTest />
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
});