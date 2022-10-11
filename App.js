import { View, Text, LogBox } from 'react-native'
import React from 'react'
import AppNavigation from './src/navigations/appNavigation'
//#region redux
import { Provider } from 'react-redux';
import configureStore from './src/redux/store';
const store = configureStore();
//#endregion

const App = () => {
  LogBox.ignoreAllLogs()
  return (
    <>
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    </>
  )
}

export default App