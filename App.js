import React, {Component} from 'react';
import { Root } from 'native-base';
import { Provider } from 'react-redux'
import AppNavigator from './src/routes/rootNavigator';
import store from './src/redux/store'

export default class App extends Component {
  render() {
    return (
        <Provider store={store}>
        <Root><AppNavigator/></Root>
        </Provider>
    )
  }
}
