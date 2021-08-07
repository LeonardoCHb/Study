import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../components/Home/HomeScreen';
import { ClassScheduleScreen } from "../components/ClassSchedule/ClassScreduleScreen";
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export function TabNavigation() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                iconName = focused
                    ? 'library-sharp'
                    : 'library-outline';
                } else if (route.name === 'Schedule') {
                iconName = focused ? 'calendar' : 'calendar-outline';
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#D3D3D3',
            tabBarInactiveTintColor: '#A9A9A9',
            tabBarActiveBackgroundColor: '#000000',
            tabBarInactiveBackgroundColor: '#000000',
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Schedule" component={ClassScheduleScreen} />
        </Tab.Navigator>
    );
}
