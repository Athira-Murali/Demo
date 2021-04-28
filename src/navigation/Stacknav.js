import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Loginscreen from '../pages/context/LoginRoot'
import Home from '../pages/context/Home'
import Tabbar from '../navigation/TabNavigator'

const Stack = createStackNavigator();

class HomeScreenStack extends React.Component {
  render() {
    return (
        <Stack.Navigator>
        <Stack.Screen name="Loginscreen" component={Loginscreen} options={{ headerShown: false }} /> 
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} /> 
        <Stack.Screen name="Tabbar" component={Tabbar} options={{ headerShown: false }} /> 
        </Stack.Navigator>
      
    );
  }
}

export default HomeScreenStack;

// import React from 'react';
// import { View, Text } from 'react-native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';

// import Loginscreen from '../screens/context/LoginRoot'
// import Tabbar from '../navigation/TabNavigator'
// const Stack = createStackNavigator();

// const HomeScreenStack = () => {
//     return (
//         <NavigationContainer>
//         <Stack.Navigator screenOptions={{
//         headerStyle: { backgroundColor:"#fff" },
//         headerTintColor: "#fff"
//     }} initialRouteName ={Loginscreen}>
//     <Stack.Screen name="Loginscreen" component={Loginscreen} options={{ headerShown: false }} /> 
//     <Stack.Screen name="Tabbar" component={Tabbar} options={{ headerShown: false }} /> 
//   </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default HomeScreenStack;