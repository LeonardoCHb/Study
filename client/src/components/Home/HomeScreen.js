import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SUBJECTS_ADD_SUBJECT } from "../../redux/actions/subjects";

import { ScrollView, Text, View } from "react-native";

import styles from "./HomeScreen.styles.js";

import { SearchField } from "../SearchField/SearchField.js";

import { TaskCard } from "../TaskCard/TaskCard.js";
import { AddTaskModal } from "../AddTaskModal/AddTaskModal";

import { FAB } from "react-native-paper";

import { SearchField } from "../SearchField/SearchField.js"
import { FAB } from "react-native-paper";

export function HomeScreen() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const Tasks = useSelector((state) => state.subjects);
  const [visible, setVisible] = useState(false);
  const [AllSubjects, SetAllSubjects] = useState([]);


  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  useEffect(() => {
    if (Tasks) {
      SetAllSubjects(Tasks);
    }
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}
      >

        <FAB
          style={styles.fab}
          small
          icon="plus"
          onPress={showDialog}
        />
        <AddTaskModal visible={visible} hideDialog={hideDialog}/>
        <Text style={styles.HeaderText}>
          Hello <Text style={styles.TextName}>{user.name}</Text>
        </Text>
        <Text style={styles.text}>What are we going to learn today?</Text>
        <SearchField />
        {AllSubjects.map((task) => {
         <TaskCard  key={task.tasks.id} />;
        })}
      </ScrollView>
    </View>
  );
}
