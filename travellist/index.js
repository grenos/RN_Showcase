import React from 'react';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

import {store} from '@Storage/Redux';
import {Provider} from 'react-redux';

import {NavigationContainer} from '@react-navigation/native';

const theme = {
  colors: {
    background: 'white',
  },
};

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <NavigationContainer theme={theme}>
        <App />
      </NavigationContainer>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => AppWrapper);
