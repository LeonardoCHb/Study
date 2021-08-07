import React, { useState, useEffect } from "react";

import { View, Text, Image } from "react-native";

import { Card, ListItem, Button, Icon } from "react-native-elements";

export function TaskCard() {
  return (
    <Card>
      <Card.Title>Nome da tarefa de hoje</Card.Title>
      <Card.Divider />
      <Card.Image>
        <Text style={{ marginBottom: 10 }}>
          The idea with React Native Elements is more about component structure
          than actual design.
        </Text>
        <Button
          icon={<Icon name="code" color="#ffffff" />}
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="VIEW NOW"
        />
      </Card.Image>
    </Card>
  );
}
