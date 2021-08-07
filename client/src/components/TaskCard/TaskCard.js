import * as React from "react";
import { Avatar, Card } from "react-native-paper";

const TaskCardStyle = {
  padding: 3,
  marginBottom: 20,
  borderRadius: 10,
};
const subtitleStyle = {
  color: "#1FDDDD",
};

export function TaskCard() {
  return (
    <Card style={TaskCardStyle}>
        <Card.Title
          title="Trigonometry Test"
          subtitle="Math - 01/01"
          subtitleStyle={subtitleStyle}
          left={(props) => <Avatar.Icon {...props} icon="home" />}
        />
        
    </Card>
  );
}
