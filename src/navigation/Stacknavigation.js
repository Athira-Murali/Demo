import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer} from '@react-navigation/native';
import mainStyle from '../config/styles';

import Login from '../pages/Login';
import Register from '../pages/Register';



const Stack = createStackNavigator();

const HomeScreenStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: mainStyle.colors.primary },
            headerTintColor: "#fff"
        }} initialRouteName ={Login}>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
          
 
           
        </Stack.Navigator>
        </NavigationContainer>

    );
}

export default HomeScreenStack;