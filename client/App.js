import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TabNavigation } from './src/Navigation/TabNavigation';

function App() {
  return (
    <NavigationContainer>
        <TabNavigation />
    </NavigationContainer>
  );
}

export default App;