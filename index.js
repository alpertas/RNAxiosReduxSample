/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import React from 'react';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './src/redux/store';

const store = createStore(rootReducer);

const ProvidedApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => ProvidedApp);
