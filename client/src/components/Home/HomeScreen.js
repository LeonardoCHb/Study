import React from "react";

import { ScrollView, Text, View } from "react-native";

import styles from "./HomeScreen.styles.js";
import { SearchField } from "../SearchField /SearchField.js";
import { TaskCard } from "../TaskCard/TaskCard.js";

export function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
      <Text style={styles.HeaderText}>Hello <Text style={styles.TextName}>Leopardo</Text></Text>
      <Text style={styles.text}>What are we going to learn today?</Text>
      <SearchField />
        <TaskCard/>
        <TaskCard/>
        <TaskCard/>
        <TaskCard/>
        <TaskCard/>
        <TaskCard/>
        <TaskCard/>
      </ScrollView>
    </View>
  );
}
