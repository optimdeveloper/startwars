/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, { Component } from 'react'
import { LogBox, Text, View } from 'react-native'
import AppContainer from './navigation'
import { MenuProvider } from 'react-native-popup-menu';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'

import { withIAPContext } from 'react-native-iap';

const store = createStore(
  reducers,
  applyMiddleware(ReduxThunk),
);
export const pStore = persistStore(store)
export { store }
export class App extends Component {
  componentDidMount() {
  LogBox.ignoreAllLogs(true)
  }
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={pStore}>
              <AppContainer />
        </PersistGate>
      </Provider>

    )
  }
}

export default withIAPContext(App)
