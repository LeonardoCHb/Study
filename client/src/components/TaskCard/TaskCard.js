import * as React from "react";
import { Avatar, Card } from "react-native-paper";

const TaskCardStyle = {
  padding: 3,
  marginBottom: 20,
  borderRadius: 10,
  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
};
const subtitleStyle = {
  color: "#2EB5E0",
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
