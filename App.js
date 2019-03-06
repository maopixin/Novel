import React, {Component} from 'react';
import {Platform,StatusBar} from 'react-native';
import Root from './src/navigations/Root'
import { Provider } from '@ant-design/react-native';
const isAndroid = Platform.OS==="android"

if(isAndroid){
  StatusBar.setBackgroundColor("transparent")
  StatusBar.setTranslucent(true)
  StatusBar.setBarStyle("dark-content")
};

export default class App extends Component{
  render() {
    return (
      <Provider>
        <Root/>
      </Provider>
    );
  }
}

