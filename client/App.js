import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TabNavigation } from './src/Navigation/TabNavigation';

import { Provider as PaperProvider } from 'react-native-paper';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from './src/redux/store'

import { StatusBar } from "expo-status-bar";
import { configureFonts, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
};



function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider theme={theme}>
          <NavigationContainer>
            <TabNavigation />
            <StatusBar 
            style="light"
            barStyle="light-content"	
            />
          </NavigationContainer>
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;