import * as React from "react";
import { View } from "react-native";
import { Button, Dialog, Portal, TextInput } from "react-native-paper";

import { useDispatch, useSelector } from "react-redux";

export function AddTaskModal({ visible, hideDialog }) {
  const [name, setName] = React.useState('');
  const [task, setTask] = React.useState('');


  return (
    <View>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Create your next activity!</Dialog.Title>
          <Dialog.Content>
            <TextInput
              placeholder="Task Name"
              mode="outlined"
              value={name}
              onChangeText={(text) => setName(text)}
            />
            <TextInput
              mode="outlined"
              placeholder="Task description"
              value={task}
              onChangeText={(text) => setTask(text)}
            />
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>Done</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
}
