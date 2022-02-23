import React from 'react';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

import {store} from './src/Storage/Redux/Store.ts';
import {Provider} from 'react-redux';

import {NavigationContainer} from '@react-navigation/native';

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <App />
      </NavigationContainer>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => AppWrapper);
