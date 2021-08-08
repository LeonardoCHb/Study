import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styles  from "./CalendarScreen.style";

export function CalendarScreen() {
  return (
    <View style={styles.container}>
        <View style={{backgroundColor: 'blue'}}>
            <Text>asdf</Text>
        </View>
        <StatusBar style="auto" />
    </View>
  );
}
