import * as React from "react";
import { View, Text } from "react-native";
import { Button, Dialog, Portal, TextInput, Checkbox } from "react-native-paper";

import styles from "./AddTaskModal.styles";

export function AddTaskModal({ visible, hideDialog }) {
  const [text, setText] = React.useState("");
  const [checked, setChecked] = React.useState(false);

  return (
    <View>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Create your next activity!</Dialog.Title>
          <Dialog.Content>
            <TextInput
              style={styles.input}
              placeholder="Activity Name"
              mode="outlined"
              value={text}
              onChangeText={(text) => setText(text)}
              left={<TextInput.Icon name="text" />}
            />
            <TextInput
              style={styles.input}
              placeholder="Subject"
              mode="outlined"
              value={text}
              onChangeText={(text) => setText(text)}
              left={<TextInput.Icon name="text" />}
            />
            <TextInput
              style={styles.input}
              placeholder="Description"
              mode="outlined"
              value={text}
              onChangeText={(text) => setText(text)}
              left={<TextInput.Icon name="text" />}
            />
            <View
            style={styles.container}
            >
                <Checkbox
                  status={checked ? "checked" : "unchecked"}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />
                <Text
                style={styles.text}
                >It's a Exam</Text>
            </View>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>CREATE</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
}
