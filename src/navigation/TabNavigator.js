import React from 'react';
import {View,Stylesheet} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import TabBar from '../screens/pages/TabBar';

import Home  from '../screens/pages/HomeScreen';
import Profile from '../screens/pages/Profile';
import Profile_edit from '../screens/pages/Profile_edit';


const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <NavigationContainer>
    <Tab.Navigator tabBar={(props) => <TabBar {...props}/>}>
     <Tab.Screen
        name='Profile'
        component={Profile}
        initialParams={{ icon: 'user' }}
      />
        <Tab.Screen
        name='Profile_edit'
        component={Profile_edit}
        initialParams={{ icon: 'user' }}
      />

<Tab.Screen
        name='Home'
        component={Home}
   />

</Tab.Navigator>
</NavigationContainer>
 );
};

export default TabNavigator;










