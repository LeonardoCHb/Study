import React, { useState, useEffect } from "react";

import { View, Text, Image } from "react-native";

import { Card, ListItem, Button, Icon, ThemeProvider } from "react-native-elements";

const theme = {
    Card: {
      containerStyle: {
        padding: 3,
        width: "auto",
        backgroundColor: "#252836",
        borderWidth: 1,
        borderRadius: 15,
      },
      wrapperStyle: {
          padding: 20,
      },
      inputStyle: {
        padding: 3,
        color: "#FFFFFF",
        backgroundColor: "#252836",
      },
      inputContainerStyle: {
        backgroundColor: "#252836",
      },
    },
  };

export function TaskCard() {
  return (
    <ThemeProvider theme={theme}>
        <Card>
          <Card.Title>Task Name</Card.Title>
          <Card.Divider />
          <Card.Image>
            <Text>
              
            </Text>
          </Card.Image>
        </Card>
    </ThemeProvider>
  );
}
