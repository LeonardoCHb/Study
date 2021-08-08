import * as React from "react";
import { View } from "react-native";
import { Button, Dialog, Portal, TextInput } from "react-native-paper";


export function AddTaskModal({ visible, hideDialog }) {
const [text, setText] = React.useState('');

  return (
    <View>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Create your next activity!</Dialog.Title>
          <Dialog.Content>
            <TextInput
              placeholder="Activity Name"
              mode="outlined"
              value={text}
              onChangeText={(text) => setText(text)}
              left={<TextInput.Icon name="new" />}
            />
            <TextInput
              mode="outlined"
              value={text}
              onChangeText={(text) => setText(text)}
            />
            <TextInput
              mode="outlined"
              value={text}
              onChangeText={(text) => setText(text)}
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
