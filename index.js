/** @format */

// import {AppRegistry} from 'react-native';
// import App from './App';

import React from 'react'
import { AppRegistry, Text } from 'react-native'
import { name as appName } from './app.json'
import Header from './src/components/header'

const App = () => {
  return (
    <Header headerText={'Albums'} />
  )
}

AppRegistry.registerComponent(appName, () => App)
