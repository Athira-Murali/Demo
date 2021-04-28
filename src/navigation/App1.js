
import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import Login from './src/pages/Login';
import Register from './src/pages/Register';

const App = createStackNavigator({
    Login: { screen: Login }, 
    Register: { screen: Register }, 
  },
  {
    initialRouteName: 'Login',
  }
);
export default createAppContainer(App);

