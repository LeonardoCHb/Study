import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackNavigation } from './src/Navigation/StackNavigation';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
        <StackNavigation />
    </NavigationContainer>
  );
}

export default App;