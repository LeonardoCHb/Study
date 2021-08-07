import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../components/Home/HomeScreen';
import { ClassScheduleScreen } from "../components/ClassSchedule/ClassScreduleScreen";

const Tab = createBottomTabNavigator();

export function TabNavigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Class Schedule" component={ClassScheduleScreen} />
        </Tab.Navigator>
    );
}
