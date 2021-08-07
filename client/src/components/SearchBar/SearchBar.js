import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, TextInput, Text } from 'react-native';

import styles from "./SearchBar.styles.js"


export function SearchBar() {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search for your assignments"
      />
    </View>
  );
}

