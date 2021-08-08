import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TabNavigation } from './src/Navigation/TabNavigation';

import { Provider as PaperProvider } from 'react-native-paper';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from './src/redux/store'

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider>
          <NavigationContainer>
            <TabNavigation />
          </NavigationContainer>
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;