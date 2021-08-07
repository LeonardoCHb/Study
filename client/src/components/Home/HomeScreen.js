import React from 'react';
import { SearchBar } from '../SearchBar/SearchBar.js';


import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';


import styles from "./HomeScreen.styles.js"


export function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.HeaderText}>Hello Leopardo!</Text>
      <Text style={styles.text}>What are we going to learn today?</Text>
      <SearchBar />
      <StatusBar translucent backgroundColor="transparent" />
    </View>
  );
}

