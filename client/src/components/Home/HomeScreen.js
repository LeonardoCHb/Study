import React from "react";

import { ScrollView, Text, View } from "react-native";

import styles from "./HomeScreen.styles.js";
import { TaskCard } from "../TaskCard/TaskCard.js";

import { SearchField } from "../SearchField/SearchField.js"
import { FAB } from "react-native-paper";

export function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.HeaderText}>
          Hello <Text style={styles.TextName}>Leopardo</Text>
        </Text>
        <Text style={styles.text}>What are we going to learn today?</Text>
        <SearchField />
        <FAB
          style={styles.fab}
          small
          icon="plus"
          onPress={() => console.log("Pressed")}
        />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </ScrollView>
    </View>
  );
}
