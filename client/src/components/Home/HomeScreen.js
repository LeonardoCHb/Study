import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { ScrollView, Text, View } from "react-native";
import { List } from "react-native-paper";

import styles from "./HomeScreen.styles.js";

// import { SearchField } from "../SearchField/SearchField.js";

// import { TaskCard } from "../TaskCard/TaskCard.js";
import { AddTaskModal } from "../AddTaskModal/AddTaskModal";

import { FAB } from "react-native-paper";


export function HomeScreen() {
  const user = useSelector((state) => state.user);
  const subjects = useSelector((state) => state.subjects);
  const [visible, setVisible] = useState(false);
  const [tasks, setTasks] = useState([])
  // const [AllSubjects, SetAllSubjects] = useState([]);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  useEffect(() => {
    if (subjects) {
      let allTasks = []
      subjects.forEach((subject) => {
        allTasks = allTasks.concat(subject.tasks)
      })
      setTasks(allTasks)
    }
  }, [subjects]);

  return (
    <View style={styles.container}>
      <Text style={styles.HeaderText}>
        Hello <Text style={styles.TextName}>{user?.name ? user?.name : 'user'}</Text>
      </Text>
      <Text style={styles.text}>Here is all your tasks</Text>
      <ScrollView
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}
        style={styles.scroll}
      >
      {/*<SearchField />*/}
      {/*AllSubjects.map((task) => {
        <TaskCard  key={task.tasks.id} />;
      })*/}
      {tasks.map((task) => (
        <List.Item key={task.id} title={task.name} description={`Description: ${task.task}\nLimit Date: ${task.limitDate}`}/>
      ))}
      </ScrollView>
      <AddTaskModal visible={visible} hideDialog={hideDialog}/>
      <FAB
        style={styles.fab}
        small
        icon="plus"
        onPress={showDialog}
      />
    </View>
  );
}
