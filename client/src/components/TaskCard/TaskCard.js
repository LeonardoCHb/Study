import React, { useState } from 'react';
import { Avatar, Card } from "react-native-paper";
import { CheckBox } from 'react-native';

const TaskCardStyle = {
  padding: 3,
  marginBottom: 20,
  borderRadius: 10,
  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
};
const subtitleStyle = {
  color: "#2EB5E0",
};
const checkbox = {
  display: "flex",
  left: -10,
}

export function TaskCard() {
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  return (
    <Card style={TaskCardStyle}>
        <Card.Title
          title="Trigonometry Test"
          subtitle="Math - 01/01"
          subtitleStyle={subtitleStyle}
          left={(props) => <Avatar.Icon {...props} icon="home" />}
          right={(props) =><CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
            style={checkbox}
          />}
        ></Card.Title>


    </Card>
  );
}
