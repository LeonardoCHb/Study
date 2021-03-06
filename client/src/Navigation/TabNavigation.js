import * as React from "react";
import { Text } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { HomeScreen } from "../components/Home/HomeScreen";
import { ClassScheduleScreen } from "../components/ClassSchedule/ClassScreduleScreen";
import { AccountSettingsScreen } from "../components/AccountSettings/AccountSettingsScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useIsFocused } from "@react-navigation/native";

const Tab = createMaterialBottomTabNavigator();

export function TabNavigation() {


  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#fff"
        inactiveColor="#000"
        barStyle={{ backgroundColor: "#1E90FF" }}
        defaultScreenOptions
        shifting={true}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarAccessibilityLabel: "Home",
            tabBarIcon: ({ focused, color }) => focused ? (
              <MaterialCommunityIcons name="home" size={26} color={color} />
            ) : (
              <MaterialCommunityIcons
                name="home-outline"
                size={26}
                color={color} />
            ),
          }} />
        <Tab.Screen
          name="Schedule"
          component={ClassScheduleScreen}
          options={{
            tabBarLabel: "Schedule",
            tabBarIcon: ({ focused, color }) => focused ? (
              <MaterialCommunityIcons
                name="calendar-heart"
                size={26}
                color={color} />
            ) : (
              <MaterialCommunityIcons
                name="calendar-blank-outline"
                size={26}
                color={color} />
            ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountSettingsScreen}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ focused, color }) =>
            focused ? (
              <MaterialCommunityIcons
                name="account-tie"
                size={26}
                color={color} />
            ) : (
              <MaterialCommunityIcons
                name="account-outline"
                size={26}
                color={color} />
            ),
          }} />
      </Tab.Navigator></>
  );
}
