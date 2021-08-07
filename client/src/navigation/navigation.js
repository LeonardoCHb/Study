import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function StackNavigation() {
    return (
        <Stack.Screen name="Home" component={HomeScreen} />
    );
}

export default StackNavigation;
