import React, {Component} from 'react';
import {Platform,StatusBar} from 'react-native';
import Root from './src/navigations/Root'
const isAndroid = Platform.OS==="android"

if(isAndroid){
  StatusBar.setBackgroundColor("transparent")
  StatusBar.setTranslucent(true)
  StatusBar.setBarStyle("dark-content")
};

export default class App extends Component{
  render() {
    return (
      <Root/>
    );
  }
}

